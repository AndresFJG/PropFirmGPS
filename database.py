import os
from dotenv import load_dotenv
import pandas as pd
import mysql.connector
from slugify import slugify
from typing import List, Dict

# Cargar variables de entorno
load_dotenv()

class DatabaseConnection:
    def __init__(self):
        try:
            self.connection = mysql.connector.connect(
                host=os.getenv('DB_HOST', 'localhost'),
                user=os.getenv('DB_USER', 'root'),
                password=os.getenv('DB_PASSWORD', ''),
                database=os.getenv('DB_NAME', 'profirm_gps')
            )
            self.cursor = self.connection.cursor()
        except mysql.connector.Error as err:
            print(f"Error de conexión: {err}")
            raise

    def close(self):
        try:
            if hasattr(self, 'cursor') and self.cursor:
                self.cursor.close()
            if hasattr(self, 'connection') and self.connection:
                self.connection.close()
        except Exception as e:
            print(f"Error al cerrar la conexión: {e}")

class FirmDataImporter:
    def __init__(self, csv_directory: str):
        self.csv_directory = csv_directory
        try:
            self.db = DatabaseConnection()
        except Exception as e:
            print(f"Error al inicializar la conexión: {e}")
            self.db = None

    def get_csv_files(self) -> List[str]:
        return [f for f in os.listdir(self.csv_directory) if f.endswith('_FAQ.csv')]

    def process_firm_name(self, filename: str) -> str:
        return filename.replace('_FAQ.csv', '').replace('_', ' ').strip()

    def import_firm_data(self, csv_file: str):
        if not self.db:
            print("No hay conexión a la base de datos")
            return

        try:
            firm_name = self.process_firm_name(csv_file)
            file_path = os.path.join(self.csv_directory, csv_file)
            
            df = pd.read_csv(file_path)
            
            self.db.cursor.execute("""
                INSERT INTO firms (name, slug) 
                VALUES (%s, %s)
                ON DUPLICATE KEY UPDATE name = %s
            """, (firm_name, slugify(firm_name), firm_name))
            
            firm_id = self.db.cursor.lastrowid or self.get_firm_id(firm_name)
            
            for col in df.columns:
                if col.startswith('FAQ_'):
                    try:
                        question_number = int(col.replace('FAQ_', ''))
                        content = df[col].iloc[0]
                        
                        if pd.notna(content) and str(content).strip():
                            self.db.cursor.execute("""
                                INSERT INTO faqs (firm_id, question_number, content)
                                VALUES (%s, %s, %s)
                                ON DUPLICATE KEY UPDATE content = %s
                            """, (firm_id, question_number, str(content), str(content)))
                    except ValueError as e:
                        print(f"Error procesando columna {col} para {firm_name}: {e}")
                        continue
            
            self.db.connection.commit()
            print(f"✅ Datos importados exitosamente para {firm_name}")
            
        except Exception as e:
            print(f"❌ Error procesando {csv_file}: {str(e)}")
            if self.db and self.db.connection:
                self.db.connection.rollback()

    def get_firm_id(self, firm_name: str) -> int:
        if not self.db:
            return None
        self.db.cursor.execute("SELECT id FROM firms WHERE name = %s", (firm_name,))
        result = self.db.cursor.fetchone()
        return result[0] if result else None

    def import_all_data(self):
        if not self.db:
            print("No se puede importar sin conexión a la base de datos")
            return

        csv_files = self.get_csv_files()
        print(f"📁 Encontrados {len(csv_files)} archivos CSV para procesar")
        
        for csv_file in csv_files:
            print(f"\n🔄 Procesando {csv_file}...")
            self.import_firm_data(csv_file)

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.db:
            self.db.close()

if __name__ == "__main__":
    csv_directory = "public/csv"  # Ajusta esta ruta según tu estructura
    
    try:
        with FirmDataImporter(csv_directory) as importer:
            print("🚀 Iniciando proceso de importación...")
            importer.import_all_data()
            print("\n✨ Proceso de importación completado")
    except Exception as e:
        print(f"❌ Error general: {e}")