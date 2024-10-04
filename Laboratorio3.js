/***********  Laboratorio 3  ************
 * 
 * En este laboratorio deberás crear el objeto images y lo utilizarás
 * para almacenar imágenes.  El objeto "images" debe contener una propiedad
 * "list", que será una matriz de objetos de imagen y métodos:
 * 
 *    1.  contains -- toma como argumento el título de la imagen y retorna
 *                    true si la imagen ya está colocada en la lista 
 *                    (de lo contrario retorna false).
 *    2.  add      -- toma tres argumentos (title, artist, y date) y crea
 *                    un nuevo objeto basado en ellos y lo agrega a la lista
 *                    (si aún no se ha agregado).
 *    3.  show     -- que muestra todas las imágenes de la lista.
 *    4.  clear    -- que elimina todos los objetos de la lista.
 * 
 * Al crear el objeto, utilice el constructor Image preparado en la tarea
 * anterior
 */ 
function Image(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}
/** 
 * Pruebe el xcript llamando a la secuencia: 
 */

const images = {
    list: [],

    // Método para verificar si una imagen ya existe
contains(title) {
    return this.list.some(image => image.title === title);
},

    // Método para agregar una imagen, evitando duplicados
    add(title, artist, date) {
        if (!this.contains(title)) {
        this.list.push(new Image(title, artist, date));
    } else {
        console.log(`La imagen '${title}' ya existe.`);
    }
},

    // Método para mostrar las imágenes con un formato customizable
    show(format = (image) => `${image.title} (${image.artist}, ${image.date})`) {
        this.list.forEach(image => console.log(format(image)));
    },

    // Método para eliminar todas las imágenes
    clear() {
        this.list = [];
    }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();