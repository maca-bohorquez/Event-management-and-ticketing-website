
export default function Main(){
    return(
        <div>
            <header className="min-h-screen bg-white ">

                <div className="md:flex flex-row items-center pl-16">
                    <div className="md:flex-col items-center pl-16 ">
                        <h3 className="py-8 px-3 lg:text-3xl font-bold text-[#143C3A] ">
                            La plataforme que une a las personas y crea comunicades</h3>
                        <h4 className="py-8 px-3 lg:text-3xl font-light text-[#143C3A] ">
                            Explora y discubre eventos con tus gustos e intereses, conoce personas
                            y comparte experiencias</h4>
                        <div
                            className="flex py-3 px-6 w-1/5 items-center justify-center text-white rounded-lg bg-[#143C3A] transform hover:scale-105 cursor-pointer hover:shadow-lg">
                            <button>Unirse a FindUs</button>
                        </div>
                    </div>
                    <img
                        className=" w-100 object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src="https://img.freepik.com/vector-premium/diseno-plano-juventud-dia-gente-abrazando_23-2148600298.jpg"
                        alt=""/>
                </div>

                <div className="md:flex space-x-16 flex-col ">
                    <div className="md:flex items-center pl-16 ">
                        <h1 className="py-8 px-3 lg:text-3xl font-bold text-[#143C3A] ">Nuestras eventos
                            principales</h1>
                    </div>

                    <div>
                        <div className="relative pt-2 lg:pt-8">

                            <div className="bg-cover w-full flex justify-center items-center gap-3">
                                <div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                                        <article
                                            className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                            <div className=" w-full mb-6">
                                                <img
                                                    className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                    src="https://img-c.udemycdn.com/course/480x270/2853486_09f9.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className=" justify-between flex-col items-center">
                                                <div className="flex items-center">
                                                    <div className="flex flex-1">
                                                        <div className="">
                                                            <p className="text-sm text-[#143C3A] font-semibold">Introducción
                                                                a la
                                                                nube</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        09 de Abril, 18:00 (GMT -5)
                                                    </div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        Online
                                                    </div>
                                                </div>
                                            </div>
                                        </article>

                                        <article
                                            className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                            <div className=" w-full mb-6">
                                                <img
                                                    className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                    src="https://img-c.udemycdn.com/course/750x422/3624814_4744_3.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className=" justify-between flex-col items-center">
                                                <div className="flex items-center">
                                                    <div className="flex flex-1">
                                                        <div className="">
                                                            <p className="text-sm text-[#143C3A] font-semibold">Taller
                                                                de
                                                                VueJs</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        10 de Abril, 18:00 (GMT -5)
                                                    </div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        Online
                                                    </div>
                                                </div>
                                            </div>
                                        </article>

                                        <article
                                            className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                            <div className=" w-full mb-6">
                                                <img
                                                    className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                    src="https://blog.durendesa.com/wp-content/uploads/2022/09/espacio-de-meditacion-en-casa_-relajacion-en-el-hogar_P.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className=" justify-between flex-col items-center">
                                                <div className="flex items-center">
                                                    <div className="flex flex-1">
                                                        <div className="">
                                                            <p className="text-sm text-[#143C3A] font-semibold">Meditacion
                                                                desde
                                                                casa</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        20 de Abril, 18:00 (GMT -5)
                                                    </div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        Online
                                                    </div>
                                                </div>
                                            </div>
                                        </article>

                                        <article
                                            className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                            <div className=" w-full mb-6">
                                                <img
                                                    className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                    src="https://www.edenred.es/wp-content/uploads/2022/02/estres-laboral.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className=" justify-between flex-col items-center">
                                                <div className="flex items-center">
                                                    <div className="flex flex-1">
                                                        <div className="">
                                                            <p className="text-sm text-[#143C3A] font-semibold">Manejo
                                                                de estres
                                                                en el trabajo</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        09 de Abril, 18:00 (GMT -5)
                                                    </div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        Online
                                                    </div>
                                                </div>
                                            </div>
                                        </article>

                                        <article
                                            className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                            <div className=" w-full mb-6">
                                                <img
                                                    className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                    src="https://img-c.udemycdn.com/course/480x270/2853486_09f9.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className=" justify-between flex-col items-center">
                                                <div className="flex items-center">
                                                    <div className="flex flex-1">
                                                        <div className="">
                                                            <p className="text-sm text-[#143C3A] font-semibold">Introducción
                                                                a la
                                                                nube</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        09 de Abril, 18:00 (GMT -5)
                                                    </div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        Online
                                                    </div>
                                                </div>
                                            </div>
                                        </article>

                                        <article
                                            className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                            <div className=" w-full mb-6">
                                                <img
                                                    className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                    src="https://img-c.udemycdn.com/course/750x422/3624814_4744_3.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className=" justify-between flex-col items-center">
                                                <div className="flex items-center">
                                                    <div className="flex flex-1">
                                                        <div className="">
                                                            <p className="text-sm text-[#143C3A] font-semibold">Taller
                                                                de
                                                                VueJs</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        10 de Abril, 18:00 (GMT -5)
                                                    </div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        Online
                                                    </div>
                                                </div>
                                            </div>
                                        </article>

                                        <article
                                            className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                            <div className=" w-full mb-6">
                                                <img
                                                    className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                    src="https://blog.durendesa.com/wp-content/uploads/2022/09/espacio-de-meditacion-en-casa_-relajacion-en-el-hogar_P.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className=" justify-between flex-col items-center">
                                                <div className="flex items-center">
                                                    <div className="flex flex-1">
                                                        <div className="">
                                                            <p className="text-sm text-[#143C3A] font-semibold">Meditacion
                                                                desde
                                                                casa</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        20 de Abril, 18:00 (GMT -5)
                                                    </div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        Online
                                                    </div>
                                                </div>
                                            </div>
                                        </article>

                                        <article
                                            className="bg-[#CDE7E6] w-60 p-6 mb-20 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                                            <div className=" w-full mb-6">
                                                <img
                                                    className="max-h-60 w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                                    src="https://www.edenred.es/wp-content/uploads/2022/02/estres-laboral.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className=" justify-between flex-col items-center">
                                                <div className="flex items-center">
                                                    <div className="flex flex-1">
                                                        <div className="">
                                                            <p className="text-sm text-[#143C3A] font-semibold">Manejo
                                                                de estres
                                                                en el trabajo</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        09 de Abril, 18:00 (GMT -5)
                                                    </div>
                                                    <div className="text-sm flex items-center text-[#143C3A] ">
                                                        Online
                                                    </div>
                                                </div>
                                            </div>
                                        </article>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:flex space-x-16  ">
                    <div className="md:flex items-center pl-16 ">
                        <h1 className="py-8 px-3 lg:text-3xl font-bold text-[#143C3A] ">Nuestras categorias
                            principales</h1>
                    </div>
                </div>

                <div id="services" className="section relative pt-5 md:pt-5 bg-white flex-row">

                    <div className="container xl:max-w-6xl mx-auto px-4">
                        <div className="flex flex-wrap flex-row -mx-4  gap-8">
                            <div>

                                <div className=" py-1 px-1 mb-1 ">
                                    <div
                                        className="inline-block text-[#143C3A] bg-[#D9D9D9] rounded-full py-12 px-12 ransition duration-300 hover:-translate-y-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                                             fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path
                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">Actividades
                                        sociales</h3>
                                </div>

                            </div>

                            <div>
                                <div className="py-1 px-1 mb-1">
                                    <div
                                        className="inline-block text-[#143C3A] bg-[#D9D9D9] rounded-full py-12 px-12 ransition duration-300 hover:-translate-y-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                                             fill="currentColor" className="bi bi-chat-square-dots" viewBox="0 0 16 16">
                                            <path
                                                d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                                            <path
                                                d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">Carreras &amp; negocios</h3>
                                </div>

                            </div>
                            <div>

                                <div className="py-1 px-1 mb-1">
                                    <div
                                        className="inline-block text-[#143C3A] bg-[#D9D9D9] rounded-full py-12 px-12 ransition duration-300 hover:-translate-y-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                                             fill="currentColor" className="bi bi-badge-ad" viewBox="0 0 16 16">
                                            <path
                                                d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                                            <path
                                                d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">Apoyo y
                                        coaching</h3>
                                </div>

                            </div>
                            <div>

                                <div className="py-1 px-1 mb-1">
                                    <div
                                        className="inline-block text-[#143C3A] bg-[#D9D9D9] rounded-full py-12 px-12 ransition duration-300 hover:-translate-y-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                                             fill="currentColor" className="bi bi-badge-ad" viewBox="0 0 16 16">
                                            <path
                                                d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"></path>
                                            <path
                                                d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">Deportes &amp; fitness</h3>
                                </div>

                            </div>

                            <div>

                                <div className="py-1 px-1 mb-1">
                                    <div
                                        className="inline-block text-[#143C3A] bg-[#D9D9D9] rounded-full py-12 px-12 ransition duration-300 hover:-translate-y-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                                             fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                                            <path
                                                d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                                        </svg>
                                    </div>

                                    <h3 className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">Arte &amp; cultura</h3>
                                </div>

                            </div>

                            <div>
                                <div className="py-1 px-1 mb-1">
                                    <div
                                        className="inline-block text-[#143C3A] bg-[#D9D9D9] rounded-full py-12 px-12 ransition duration-300 hover:-translate-y-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem"
                                             fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                                            <path
                                                d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg text-[#143C3A] leading-normal mb-2 font-semibold">Tecnología</h3>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="md:flex justify-center">
                <div className="md:flex flex-row rounded-lg  items-center w-4/5 bg-[#CDE7E6]">
                    <div className="md:flex-col items-center pl-16 ">
                        <h3 className="py-8 px-3 lg:text-3xl font-bold text-[#143C3A] ">
                            Únete a FindUs</h3>
                        <h4 className="py-8 px-3 lg:text-3xl font-light text-[#143C3A] ">
                            Descubre una comunidad donde puedas compartir y encontrar nuevas experiencias.</h4>
                        <div
                            className="flex py-3 px-6 w-1/3 items-center justify-center text-white rounded-lg bg-[#143C3A] transform hover:scale-105 cursor-pointer hover:shadow-lg">
                            <button>Registrate</button>
                        </div>
                    </div>
                    <img
                        className="w-100 object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src="https://i.pinimg.com/originals/5c/69/d7/5c69d7b70bd9dc491421a89a7712e364.jpg"
                        alt=""/>
                </div>
                </div>
            </header>
        </div>
    );
}