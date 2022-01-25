class Fetch {
    static #url = 'https://kenzie-food-api.herokuapp.com'
    static #token = 'uigdlihgfiaf8afhe9i7fg9iafh9ai'

    static async get(endpoint) {
        const res = await fetch(Fetch.#url + endpoint)

        const data = await res.json()

        return data
    }

    static async post(endpoint, body) {
        const res = await fetch(Fetch.#url + endpoint, {
            method: 'POST',
            headers: {
                Authorization: Fetch.#token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const data = await res.json()

        return data
    }

    static async patch(endpoint, body) {
        const res = await fetch(Fetch.#url + endpoint, {
            method: 'PATCH',
            headers: {
                Authorization: Fetch.#token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const data = await res.json()

        return data
    }

    static async delete(endpoint,) {
        const res = await fetch(Fetch.#url + endpoint, {
            method: 'DELETE',
            headers: {
                Authorization: Fetch.#token,
            }
        })

        const data = await res.json()

        return data
    }
}

export { Fetch }