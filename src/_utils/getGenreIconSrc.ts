import CrimeIMG from "/Pics/Genres_icon/Crime.png"
import DramaIMG from "/Pics/Genres_icon/Drama.png"
import ActionIMG from "/Pics/Genres_icon/Action.png"
import BiographyIMG from "/Pics/Genres_icon/Biography.png"
import HistoryIMG from "/Pics/Genres_icon/History.png"
import AdventureIMG from "/Pics/Genres_icon/Adventure.png"
import FantasyIMG from "/Pics/Genres_icon/Fantasy.png"
import WesternIMG from "/Pics/Genres_icon/Western.png"
import ComedyIMG from "/Pics/Genres_icon/Comedy.png"
import SciFiIMG from "/Pics/Genres_icon/Sci-Fi.png"
import MysteryIMG from "/Pics/Genres_icon/Mystery.png"
import ThrillerIMG from "/Pics/Genres_icon/Thriller.png"
import FamilyIMG from "/Pics/Genres_icon/Family.png"
import WarIMG from "/Pics/Genres_icon/War.png"
import AnimationIMG from "/Pics/Genres_icon/Animation.png"
import RomanceIMG from "/Pics/Genres_icon/Romance.png"
import HorrorIMG from "/Pics/Genres_icon/Horror.png"
import MusicIMG from "/Pics/Genres_icon/Music.png"
import FilmNoirIMG from "/Pics/Genres_icon/Film-Noir.png"
import MusicalIMG from "/Pics/Genres_icon/Musical.png"
import SportIMG from "/Pics/Genres_icon/Sport.png"

const Genres = [
    {
        id: 1,
        name: "Crime",
        img: CrimeIMG,
    },
    {
        id: 2,
        name: "Drama",
        img: DramaIMG,
    },
    {
        id: 3,
        name: "Action",
        img: ActionIMG,
    },
    {
        id: 4,
        name: "Biography",
        img: BiographyIMG,
    },
    {
        id: 5,
        name: "History",
        img: HistoryIMG,
    },
    {
        id: 6,
        name: "Adventure",
        img: AdventureIMG,
    },
    {
        id: 7,
        name: "Fantasy",
        img: FantasyIMG,
    },
    {
        id: 8,
        name: "Western",
        img: WesternIMG,
    },
    {
        id: 9,
        name: "Comedy",
        img: ComedyIMG,
    },
    {
        id: 10,
        name: "Sci-Fi",
        img: SciFiIMG,
    },
    {
        id: 11,
        name: "Mystery",
        img: MysteryIMG,
    },
    {
        id: 12,
        name: "Thriller",
        img: ThrillerIMG,
    },
    {
        id: 13,
        name: "Family",
        img: FamilyIMG,
    },
    {
        id: 14,
        name: "War",
        img: WarIMG,
    },
    {
        id: 15,
        name: "Animation",
        img: AnimationIMG,
    },
    {
        id: 16,
        name: "Romance",
        img: RomanceIMG,
    },
    {
        id: 17,
        name: "Horror",
        img: HorrorIMG,
    },
    {
        id: 18,
        name: "Music",
        img: MusicIMG,
    },
    {
        id: 19,
        name: "Film-Noir",
        img: FilmNoirIMG,
    },
    {
        id: 20,
        name: "Musical",
        img: MusicalIMG,
    },
    {
        id: 21,
        name: "Sport",
        img: SportIMG,
    },
]

const getGenreIconSrc = (genreName: string) => {
    return Genres.find(genre => genre.name === genreName)!.img
}
export default getGenreIconSrc
