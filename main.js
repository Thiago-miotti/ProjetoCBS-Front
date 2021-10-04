function fetchComputers(){
    const dados = axios.get("http://localhost:3000/").then((res) => {
        const div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML += `<h2>${res.data.name}</h2>
                <h2>${res.data.lastName}</h2>
                <h2>${res.data.age}</h2>`;
      });

      console.log('dados')
}


