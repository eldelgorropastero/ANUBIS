import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertController, Platform } from '@ionic/angular';
import { Noticias } from './noticias';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {
  public database!: SQLiteObject;
  //Tablas
  tablaCanciones: string = "CREATE TABLE IF NOT EXISTS canciones(cancion_id INTEGER PRIMARY KEY AUTOINCREMENT, nombre_autor VARCHAR(50) NOT NULL, nombre_cancion VARCHAR(50) NOT NULL, musica BLOB NOT NULL, duracion VARCHAR(10) NOT NULL);";

  tablaNoticias: string = "CREATE TABLE IF NOT EXISTS noticia(id_noticia INTEGER PRIMARY KEY AUTOINCREMENT, titulo VARCHAR(50) NOT NULL, descripcion TEXT NOT NULL)";
  //Registros
  registroCancion1: string = "INSERT or IGNORE INTO canciones(cancion_id, nombre_autor, nombre_cancion, musica, duracion) VALUES (1, 'eminem', 'houdine', '', '03:47');";

  registroNoticia1: string = "INSERT or IGNORE INTO noticia(id_noticia, titulo, descripcion) VALUES ('1', 'DUKI', 'wdasdw');";

  listaCanciones = new BehaviorSubject([]);
  listaNoticias = new BehaviorSubject([]);

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController) { this.crearBD(); }

  crearBD(){
    //verificar la plataforma
    this.platform.ready().then(()=>{
      //crear mi base de datos
      this.sqlite.create({
        name: 'bdcanciones.db',
        location: 'default'
      }).then((bd: SQLiteObject)=>{
        //guardar mi conexion a base de datos
        this.database = bd;
        //llamar a la función de creación de tablas
        this.crearTablas();
        this.traerNoticias();
        //cambiar el observable del estado de la base de datos
        this.isDBReady.next(true);
      }).catch(e=>{
        this.presentAlert('CrearBD()', 'Error: ' + JSON.stringify(e));
      })
    })
  }

  async crearTablas(){
    try{
      await this.database.executeSql(this.tablaNoticias, []);

      await this.database.executeSql(this.registroNoticia1, []);


    }catch(e){
      this.presentAlert('CrearTabla()', 'Error: ' + JSON.stringify(e));
    }
  }

  fetchNoticias(): Observable<Noticias[]>{
    return this.listaNoticias.asObservable();
  }

  dbState(){
    return this.isDBReady.asObservable();
  }

  async presentAlert(titulo:string, msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  traerNoticias(){
    return this.database.executeSql('SELECT * FROM noticia',[]).then(res=>{
      //variable para almacenar el resultado de la consulta
      let items: Noticias[] = [];
      //verificar si trae o no registros
      if(res.rows.length > 0){
        //recorro los registros
        for(var i = 0; i < res.rows.length; i++){
          //agregar el registro a mi variable
          items.push({
            id_noticia: res.rows.item(i).id_noticia,
            titulo: res.rows.item(i).titulo,
            descripcion: res.rows.item(i).descripcion
          })
        }
      }
      //actualizo mi observable
      this.listaNoticias.next(items as any);
    })
  }

  eliminarNoticia(id:string){
    return this.database.executeSql('DELETE FROM noticia WHERE id_noticia = ?',[id]).then(res=>{
      this.presentAlert("Eliminar", "Noticia Eliminado");
      this.traerNoticias();
    }).catch(e=>{
      this.presentAlert('Eliminar', 'Error: ' + JSON.stringify(e));
    })
  }

  actualizarNoticia(id_noticia:string, titulo:string, descripcion:string){
    return this.database.executeSql('UPDATE noticia SET titulo = ?, descripcion = ? WHERE id_noticia = ?',[titulo, descripcion, id_noticia]).then(res=>{
      this.presentAlert("Modificar", "Noticia Modificada");
      this.traerNoticias();
    }).catch(e=>{
      this.presentAlert('Modificar', 'Error: ' + JSON.stringify(e));
    })
  }

  agregarBiomas(titulo: string, descripcion:string){
    return this.database.executeSql('INSERT INTO noticia(titulo, descripcion) VALUES (?, ?)',[titulo, descripcion]).then(res=>{
      this.presentAlert("Agregar", "Noticia Agregada");
      this.traerNoticias();
    }).catch(e=>{
      this.presentAlert('Agregar', 'Error: ' + JSON.stringify(e));
    })
  }

}
