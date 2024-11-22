import pandas as pd
import os

# Cargar el archivo CSV
file_path = 'public/pro_firm_details_v2-profirm_gps_v1_separado.csv'
df = pd.read_csv(file_path)

# Ruta de la carpeta de logos
logos_path = 'src\logos'

# Obtener la lista de archivos de logos
logos_files = os.listdir(logos_path)

# Crear un diccionario para mapear firmas a logos
logos_dict = {}
for logo in logos_files:
    # Obtener el nombre del archivo sin la extensión
    firm_name = os.path.splitext(logo)[0]  
    logos_dict[firm_name] = logo

# Crear la nueva columna 'logo' en el DataFrame
df['logo'] = df['FIRM'].map(logos_dict)

# Guardar el archivo CSV con la nueva columna
df.to_csv(file_path, index=False)

print("Columna 'logo' añadida exitosamente.")