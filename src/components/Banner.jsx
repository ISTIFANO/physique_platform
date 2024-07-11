import React from 'react';
import { motion } from 'framer-motion';
import Bannerimg from "../assets/horizonta.png";

export default function Banner() {
    return (
        <header className="bg-white">
            <main className="flex flex-col md:flex-row items-center justify-between pt-8 pr-8 pl-8">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                        Explorez la <span className="text-blue-600 dark:text-blue-600">Physique</span> à votre rythme, quand vous le souhaitez.
                    </h1>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
                        Tous les cours, de la sixième année primaire au BAC en <span className="font-semibold">arabe darija</span> et en <span className="font-semibold">français</span>.
                    </p>
                    <ul className="mb-6 space-y-2">
                        <li className="flex items-center text-zinc-700 dark:text-zinc-300">
                            <img alt="check-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✔" className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-2" />
                            Cours expliqués en vidéo
                        </li>
                        <li className="flex items-center text-zinc-700 dark:text-zinc-300">
                            <img alt="check-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✔" className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-2" />
                            Exercices corrigés en vidéo
                        </li>
                        <li className="flex items-center text-zinc-700 dark:text-zinc-300">
                            <img alt="check-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✔" className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-2" />
                            Quiz pour t'entraîner
                        </li>
                        <li className="flex items-center text-zinc-700 dark:text-zinc-300">
                            <img alt="check-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✔" className="text-blue-600 dark:text-blue-400 w-6 h-6 mr-2" />
                            Suivi de ta progression
                        </li>
                    </ul>
                    <button className="bg-blue-600 dark:bg-blue-400 text-white font-semibold py-2 px-4 rounded-md mb-6">
                         Se connecter
                    </button>
                </div>
                <div className="flex justify-end md:w-1/2">
                    <img src={Bannerimg} alt="Student studying with headphones" className="w-auto h-96 rounded-lg" />
                </div>
            </main>
            
            <div className="flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Features</h2>
                  <p className="mt-4 text-center text-muted-foreground max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                  </p>
                  </div>
        </header>
    );
}
