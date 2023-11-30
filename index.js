const url = " https://jsonplaceholder.typicode.com/users";
const form = document.querySelector('form');

async function postJSON(e) {
    e.preventDefault();

    const formulario = new FormData(form);

    let json = {};

    formulario.forEach((value, key) => {
        json[key] = value;
    })

    try {
        const response = await fetch(url, {
            method: "POST",           
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(json),
        });

        const data = await response.json();
        console.log("Respuesta: ", data);

    } catch (error) {
        console.log('Error: ', error);
    }
}

form.addEventListener('submit', postJSON); 
