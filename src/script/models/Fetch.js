class Fetch {

    static async get() {
        const res = await fetch('https://kenzie-food-api.herokuapp.com/product')
        const data = await res.json()
        return data
    }

    static post() {

    }

    static patch() {

    }

    static delete() {

    }
}

export {Fetch}