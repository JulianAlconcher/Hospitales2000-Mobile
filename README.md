# Hospitales 2000 - Mobile App

Esta es la aplicacion para la pagina web de Hospitales 2000

## --> Instalacion 

Para correr el proyecto deberan:
1) Clonar el repositorio
```bash
git clone https://github.com/JulianAlconcher/Hospitales2000-Mobile
```
## Instalar un Emulador Android
Para esto, necesitamos tener instalado Android Studio y configurar las siguientes variables de entorno.

Windows Control Panel > User Accounts > User Accounts (again) > Change my environment variables and click New to create a new ANDROID_HOME user variable. The value of this variable will point to the path to your Android SDK:

![image](https://github.com/user-attachments/assets/c994aa8b-edea-4f25-8ae9-6b375945005c)

Para chequear, que se hizo correctamente, corroboramos con este comando que ANDROID_HOME se encuentre ahi. (Si tiene una terminal abierta, cierrela y vuelvala a abrir)

```bash
Get-ChildItem -Path Env: 
```

Luego, editamos Path y agregamos lo siguiente:
Ir a Windows Control Panel > User Accounts > User Accounts (again) > Change my environment variables > Path > Edit > New and add the path to the platform-tools to the list as shown below:

![image](https://github.com/user-attachments/assets/e623cffe-824d-4f99-b1a4-ce76642930e1)


Listo, para corroborar que esta correcto, tipeamos el siguiente comando:

```bash
adb --version
```

### Iniciar emulador en Android Studio
1) En la pantalla principal de Android Studio, haga clic en Más acciones y luego en Administrador de dispositivos virtuales en el menú desplegable.

2) Haga clic en el botón Crear dispositivo.

3) En Seleccionar hardware, elija el tipo de hardware que desea emular. Recomendamos realizar pruebas con una variedad de dispositivos. (Yo uso el Pixel 3a)

## Para correr el proyecto

Para correr el proyecto, simplemente hacemos:

```bash
npx expo start
```
y Selecciomos la letra "a" para iniciar el emulador Android.
## License

Comision 1.
