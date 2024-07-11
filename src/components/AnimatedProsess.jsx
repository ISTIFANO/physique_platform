
import React from 'react';

export default function AnimatedProsess() {
    return (
        <div className="flex flex-wrap justify-around bg-muted p-4">
           
            <div className="flex items-center space-x-2 p-2 animate-slide-right">
                <i className="text-primary">
                    <img alt="t-shirt" src="https://openui.fly.dev/openui/24x24.svg?text=👕" />
                </i>
                <div>
                    <h3 className="text-primary-foreground font-semibold">Retour 90 Jours</h3>
                    <p className="text-muted-foreground">Pour les problèmes de marchandises</p>
                </div>
            </div>
            <div className="flex items-center space-x-2 p-2 animate-slide-right">
                <i className="text-primary">
                    <img alt="secure-payment" src="https://openui.fly.dev/openui/24x24.svg?text=💳" />
                </i>
                <div>
                    <h3 className="text-primary-foreground font-semibold">Paiements Sécurisés</h3>
                    <p className="text-muted-foreground">100% Sécurisé et Sûr</p>
                </div>
            </div>
            <div className="flex items-center space-x-2 p-2 animate-slide-right">
                <i className="text-primary">
                    <img alt="support" src="https://openui.fly.dev/openui/24x24.svg?text=🧑‍💻" />
                </i>
                <div>
                    <h3 className="text-primary-foreground font-semibold">Support 24/7</h3>
                    <p className="text-muted-foreground">Support Dédié</p>
                </div>
            </div>
        </div>
    );
}
