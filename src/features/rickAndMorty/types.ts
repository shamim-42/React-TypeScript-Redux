export type OriginType = {
    name: string
    url: string
}

export type LocationType = {
    name: string,
    url: string
}

export type CharecterType = {
    id: number,
    name: string
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: OriginType,
    location: LocationType,
    image: string,
    episode: [],
    url: string,
    created: string
}

type InfoType = {
    count: number | null,
    next: string | null,
    pages: number | null,
    prev: number | null
}

export type CharectersApiResponseType = {
    info: InfoType,
    results: CharecterType[]
}