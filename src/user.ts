
interface Phone {
    [name: string]: string
}

interface User {
    name: string
    age?: number
    readonly isMale: boolean
    say: () => string
    phone: Phone
}

interface VIPUser extends User {
    broadcast: () => void
}