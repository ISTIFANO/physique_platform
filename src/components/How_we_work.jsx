export default function How_we_work() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-card text-card-foreground">
            <div className="w-full md:w-1/2 p-4">
                <div className="relative overflow-hidden pb-[56.25%] h-0">
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full rounded-3xl" 
                        src="https://www.youtube.com/embed/xtl_ITB2lUg" 
                        title="YouTube video" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold text-foreground text-center pb-4 sm:text-4xl">
         <span className="text-yellow-400 ">Physique</span>  avec Chargui ?
      </h2>                <p className="text-muted">
      Le professeur Marwane Chargui enseigne la physique et la chimie aux élèves de première et de terminale Baccalauréat. Il rend les concepts complexes accessibles et fournit des astuces pour résoudre les exercices. Il offre également des conseils précieux et des cours de préparation pour les concours de médecine, ENSA, ENSAM, et ISPITS, aidant ses élèves à se préparer efficacement et avec confiance.                </p>
            </div>
        </div>
    );
}
