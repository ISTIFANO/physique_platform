import prof from '../assets/chargui.png';


export default function ProfInfo() {
    return (
        <div className="flex flex-col md:flex-row items-center  bg-blue-600 p-8">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <img src={prof} alt="Person holding books and phone" className="h-80 w-auto" />
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
                <div className="bg-secondary text-secondary-foreground inline-block px-3 py-1 rounded-full text-sm mb-4">
                    À propos de nous
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                    Bienvenue sur le <span className="text-primary">Centre</span> de Formation en Ligne
                </h1>
                <p className="text-muted-foreground mb-6">
                    Établir des relations entre les gouvernements multinationaux et les ONG mondiales commence ici.
                </p>
                <ul className="space-y-4 mb-6">
                    <li className="flex items-center space-x-2">
                        <i className="text-primary"><img alt="check-circle" src="https://openui.fly.dev/openui/24x24.svg?text=✔️" /></i>
                        <span className="text-primary-foreground">Explorez une variété d'enseignements éducatifs frais</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <i className="text-primary"><img alt="check-circle" src="https://openui.fly.dev/openui/24x24.svg?text=✔️" /></i>
                        <span className="text-primary-foreground">Apprentissage vidéo interactif repensé</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <i className="text-primary"><img alt="check-circle" src="https://openui.fly.dev/openui/24x24.svg?text=✔️" /></i>
                        <span className="text-primary-foreground">Plateforme de cours véritablement de niveau blanc</span>
                    </li>
                </ul>
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/80">
                    En savoir plus sur nous →
                </button>
            </div>
        </div>
    );
}
