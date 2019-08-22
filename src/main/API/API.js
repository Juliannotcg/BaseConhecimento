
const lookUp = {};
const lerComoJson = respostaHttp => respostaHttp.json();
const interpretarResposta = json => {
        return json;
}

const urlBase = "https://localhost:44342/api";

class API {
    static BaseConhecimento = class {
        static post(resource, data) {
            return fetch(urlBase + resource, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json-patch+json'
                },
                method: "POST",
                body: JSON.stringify(data)
            })
                .then(lerComoJson)
                .then(interpretarResposta);
        }

        static put(resource, data) {
            return fetch(urlBase + resource, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json-patch+json'
                },
                method: "PUT",
                body: JSON.stringify(data)
            })
                .then(lerComoJson)
                .then(interpretarResposta);
        }

        static delete(resource) {
            return fetch(urlBase + resource, {
                method: "DELETE"
            })
                .then(lerComoJson)
                .then(interpretarResposta)
        }

        static get(resource) {
            return fetch(urlBase + resource)
            .then(lerComoJson)
            .then(interpretarResposta)
        }
    }
}

export default API;