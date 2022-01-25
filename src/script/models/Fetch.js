class Fetch {
    static #url = 'https://kenzie-food-api.herokuapp.com'
    static #token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImlhdCI6MTY0MzExODcwNywiZXhwIjoxNjQzOTgyNzA3LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.g2TA97RU70nTjPzZFvqH1oDiM10wOFTciAi-U8Z2lRs'

    static async get(endpoint) {
        const res = await fetch(Fetch.#url + endpoint, {
            headers: {
                Authorization: 'Token ' + Fetch.#token
            },
        })

        const data = await res.json()

        return data
    }

    static async post(endpoint, body) {
        const res = await fetch(Fetch.#url + endpoint, {
            method: 'POST',
            headers: {
                Authorization: 'Token ' + Fetch.#token,
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
                Authorization: 'Token ' + Fetch.#token,
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
                Authorization: 'Token ' + Fetch.#token
            }
        })

        const data = await res.json()

        return data
    }
}

export { Fetch }