import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Pack() {
    const [sectionTitle, setSectionTitle] = useState('Baccalauréat'); // Initial section title

    // Function to handle button clicks and update section title
    const handleButtonClick = (title) => {
        setSectionTitle(title);
    };

    return (
        <>
            <div className="container pt-11 mx-auto p-4">
                <div className="flex justify-center space-x-4 mb-8">
                    <button className="bg-teal-500 text-white py-2 px-4 rounded-t-lg" onClick={() => handleButtonClick('Baccalauréat')}>Bac</button>
                    <button className="bg-zinc-200 text-zinc-800 py-2 px-4 rounded-t-lg" onClick={() => handleButtonClick('1ère Bac')}>1ère Bac</button>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold" id="sectionTitle">{sectionTitle}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="contentSection">
                    {/* Conditional rendering based on section title */}
                    {sectionTitle === 'Baccalauréat' && (
                        <>
                            {/* Pack 1 */}
                            <div className="bg-primary text-primary-foreground border border-border rounded-lg p-6 w-full transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-amber-100 ">
                                <div className="flex justify-center mb-4">
                                    <img alt="flag-icon" src="https://openui.fly.dev/openui/40x40.svg?text=🏁" />
                                </div>
                                <h2 className="text-xl font-semibold text-center mb-2">Pack 1: Gratuit</h2>
                                <p className="text-center text-4xl font-bold mb-2">Gratuit</p>
                                <p className="text-center text-muted-foreground mb-4">Pour les cours de bac</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center"><span className="text-primary">&#10003;</span> Accès aux cours du bac</li>
                                    <li className="flex items-center"><span className="text-primary">&#10003;</span> 5 PDF de cours et exercices</li>
                                </ul>
                            </div>
                            
                            {/* Pack 2 */}
                            <div className="bg-primary text-primary-foreground border border-border rounded-lg p-6 w-full transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-amber-100">
                                <div className="flex justify-center mb-4">
                                    <img alt="planet-icon" src="https://openui.fly.dev/openui/40x40.svg?text=🪐" />
                                </div>
                                <h2 className="text-xl font-semibold text-center mb-2">Pack 2: Tous les cours gratuits</h2>
                                <p className="text-center text-4xl font-bold mb-2">Gratuit</p>
                                <p className="text-center text-muted-foreground mb-4">Pour tous les cours et PDF</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center"><span className="text-primary-foreground">&#10003;</span> Accès à tous les cours</li>
                                    <li className="flex items-center"><span className="text-primary-foreground">&#10003;</span> PDF de cours et exercices</li>
                                    <li className="flex items-center"><span className="text-primary-foreground">&#10003;</span> Accès aux lives</li>
                                </ul>
                            </div>
                            
                            {/* Pack 3 */}
                            <div className="bg-primary text-primary-foreground border border-border rounded-lg  p-6 w-full transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-amber-100">
                                <div className="flex justify-center mb-4">
                                    <img alt="comet-icon" src="https://openui.fly.dev/openui/40x40.svg?text=☄️" />
                                </div>
                                <h2 className="text-xl font-semibold text-center mb-2">Pack 3: Préparation aux concours</h2>
                                <p className="text-center text-4xl font-bold mb-2">$99</p>
                                <p className="text-center text-muted-foreground mb-4">Préparation et astuces</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center"><span className="text-primary">&#10003;</span> Préparation aux concours</li>
                                    <li className="flex items-center"><span className="text-primary">&#10003;</span> Astuces et conseils</li>
                                    <li className="flex items-center"><span className="text-primary">&#10003;</span> PDF et vidéos pour astuces</li>
                                    <li className="flex items-center"><span className="text-primary">&#10003;</span> Accès aux lives</li>
                                </ul>
                            </div>
                        </>
                    )}

                    {sectionTitle === '1ère Bac' && (
                        <>
                            {/* Content for 1ère Bac */}
                            <div className="bg-primary text-primary-foreground border border-border rounded-lg p-6 w-full transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-amber-100">
                                <div className="flex justify-center mb-4">
                                    <img alt="flag-icon" src="https://openui.fly.dev/openui/40x40.svg?text=🏁" />
                                </div>
                                <h2 className="text-xl font-semibold text-center mb-2">Pack 1: 1ère Bac</h2>
                                <p className="text-center text-4xl font-bold mb-2">Gratuit</p>
                                <p className="text-center text-muted-foreground mb-4">Pour les cours de 1ère Bac</p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center"><span className="text-primary">&#10003;</span> Accès aux cours de 1ère Bac</li>
                                    <li className="flex items-center"><span className="text-primary">&#10003;</span> 5 PDF de cours et exercices</li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
