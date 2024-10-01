 
  <script setup>
    import { ref, onMounted, computed } from 'vue';
    const nombre = ref("")
    
    const characters = []
    const cantPersonajes = []
    for (let i = 1; i < 51; i++){
        cantPersonajes.push(i)
    }

    const rickAndMorty = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/[${cantPersonajes}]`);
        const data = await response.json();
        characters.value = data;
      } catch (error) {
        console.error('Error al obtener personajes:', error);
      } 
    };

    const buscarPorNombre = computed(() => {
        let filtrado = []
        if(nombre.value !== ""){
            filtrado = characters.value.filter((char) => char.name.toLowerCase().includes(nombre.value.toLowerCase()))
        }
        return filtrado;
    })

    onMounted(() => {
        rickAndMorty()
    })
  </script>
  
  <template>
    <div>
        <h1>Buscando en la API de Rick & Morty</h1>
        <label for="nombreRM">Escribi un nombre para buscar</label>
        <input type="text" v-model="nombre" placeholder="Rick Sanchez"/>
    </div>
    <div v-if="buscarPorNombre.length > 0">
        <li v-for="pers in buscarPorNombre">{{ pers.name }}</li>
    </div>
  </template>

  <style></style>