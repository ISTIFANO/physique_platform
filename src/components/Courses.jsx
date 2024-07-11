import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Courses = () => {
    // Static courses data
    const coursesData = [
        {
            ID_Cours: 1,
            Nom_du_cours: "Cours de Mathématiques",
            Miniature: "https://placehold.co/300x200",
            enseignant_nom: "Dupont",
            enseignant_prenom: "Jean",
            Matière_enseignée: "Mathématiques",
            cours_description: "Introduction aux concepts de base.",
            img_enseignée: "https://placehold.co/150x150",
            price: 49.99
        },
        {
            ID_Cours: 2,
            Nom_du_cours: "Cours de Physique",
            Miniature: "https://placehold.co/300x200",
            enseignant_nom: "Martin",
            enseignant_prenom: "Marie",
            Matière_enseignée: "Physique",
            cours_description: "Apprendre la physique de manière interactive.",
            img_enseignée: "https://placehold.co/150x150",
            price: 59.99
        },
        {
            ID_Cours: 3,
            Nom_du_cours: "Cours de Chimie",
            Miniature: "https://placehold.co/300x200",
            enseignant_nom: "Leroy",
            enseignant_prenom: "Paul",
            Matière_enseignée: "Chimie",
            cours_description: "Découvrir les bases de la chimie.",
            img_enseignée: "https://placehold.co/150x150",
            price: 39.99
        },
        {
            ID_Cours: 4,
            Nom_du_cours: "Cours de Biologie",
            Miniature: "https://placehold.co/300x200",
            enseignant_nom: "Garcia",
            enseignant_prenom: "Laura",
            Matière_enseignée: "Biologie",
            cours_description: "Exploration du monde vivant.",
            img_enseignée: "https://placehold.co/150x150",
            price: 44.99
        }
    ];

    const [courses, setCourses] = useState(coursesData);

    // Slider settings configuration
    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            }
        ]
    };

    return (
        <section className='w-full bg-white  pb-4'>
            <div className='w-screen'>
                <h1 className='py-4 text-3xl font-bold'>Cours les plus populaires <span className='text-[#20B486]'></span></h1>
                <p className='text-[#6D737A] py-3'>Plusieurs versions ont évolué au fil des ans, parfois par accident.</p>
            </div>
            <div className='w-screen gap-5'>
                {/* Slider component with configured settings */}
                <Slider {...sliderSettings} className='px-5'>
                    {/* Mapping over the courses to display each course card */}
                    {courses.map(course => (
                        <div key={course.ID_Cours} className='course-card group relative p-4 bg-card rounded-lg shadow-md'>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src={course.Miniature}
                                    alt={course.Nom_du_cours}
                                    className='w-full h-40 object-cover rounded-lg'
                                />
                                {/* <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white'
                                    style={{ transition: 'opacity 0.3s ease' }}>
                                    <img
                                        src={course.img_enseignée}
                                        alt={`${course.enseignant_nom} ${course.enseignant_prenom}`}
                                        className='rounded-full w-24 h-24 object-cover'
                                    />
                                       <p>{course.enseignant_nom} {course.enseignant_prenom}, {course.Matière_enseignée}</p>
                                </div> */}
                            </div>
                            <h3 className='mt-4 text-lg font-semibold text-foreground'>{course.Nom_du_cours}</h3>
                            <p className='text-muted-foreground'>{course.cours_description} {course.enseignant_prenom}, {course.Matière_enseignée}</p>
                            <div className='flex items-center mt-2'>
                                <span className='text-primary font-bold'>4.5</span>
                                <span className='text-primary ml-1'>★</span>
                                <span className='text-muted-foreground ml-2'>(35)</span>
                            </div>
                            <p className='mt-2 text-primary-foreground'>${course.price}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Courses;
