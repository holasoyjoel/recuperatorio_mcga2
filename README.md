# SISTEMA DE MCGA

Nuestro sistema de MCGA, es una web app que nos permite navegar entre dos layouts (' **HOME** ' y ' **USERS** ') permitiendonos realizar acciones de **ABM** para nuestros users.
***
## Layouts
Detallando layouts:

`HOME` : Este layout nos muestra el nomre de nuestro sistema junto ocn el nombre del alumno que lo desarrollo.

`USERS` : Este layout nos muestra una tabla con todos nuestros usuarios guardados en base de datos, dichos datos son visualizados a traves de una tabla, lo cual, nos permite ver las distintas propiedades de nuestros usuarios junto con dos botones (EDITAR / ELIMINAR) para poder interactuar con ellos, Además, también se encuentra un boton de 'Nuevo Usuario', permitiendonos crear nuevos registros para ser guardados en la base de datos. 

Dichos botones nombrados anteriormentes nos permiten realizar las siguientes acciones:

`Nuevo Usuario` : Al hacer click sobre este boton, nos redirige hacia **http://localhost:3000/newUser** , aqui se abre una nueva pantalla con un formulario para poder cargar los datos del nuevo usuario.

`Editar`: Al hacer click sobre este boton, nos redirige hacia **http://localhost:3000/editUser/:id** pasandole como parametro el ID del usuario a editar.

`Eliminar`: Al hacer click sobre este boton nos eliminará el usuario seleccionado.
***

Para instalar las dependencias necesarias para este proyecto, favor de ejecutar 
~~~
npm install
~~~

## Tecnologías utilizadas:
1. [**React**]("https://es.reactjs.org") - biblioteca de javascript para construir interfaces de usuario.
2. [**React Router Dom**]("https://reactrouter.com") - librería que nos facilita el proceso de definir rutas de navegación de nuestra aplicación.
3. [**React Redux**]("https://es.redux.js.org") - librearía para el manejo del estado de nuestras aplicaciones.
4. [**Redux Toolkit**]("https://redux-toolkit.js.org") - librería que nos permite un desarrollo más eficiente de redux
5. [**React Hook Form**]("https://react-hook.form.com") - librearía que nos permite independizar todo cambio que pueda producirse en cada unos de los elementos de nuestros formulario.  
6. [**Redux Thunk**]("https://redux.js.org/usage/writing-logic-thunk") - librearía que nos permite realizar operaciones asincronas en nuestra aplicación.

***
Los siguientes endpoints son llamados desde el sistema mcga:

* `[GET]` http://localhost:3001/users (obtener todos los usuarios)
* `[GET]` http://localhost:3001/users/user/:id (obtener un usuario según id)
* `[POST]`http://localhost:3001/users/user (crear usuario)
* `[PUT]` http://localhost:3001/users/user/${id} (editar usuario según id)
* `[DELETE]` http://localhost:3001/users/user/${id} (eliminar usuario según id)
