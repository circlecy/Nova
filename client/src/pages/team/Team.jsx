import "./team.css";

export default function Team() {

    return (
        <div className="teams">
            <section className="page-title bg-dark-overlay text-center">
                <div className="container">
                    <div className="page-title__holder">
                        <h1 className="page-title__title">Our Teams</h1>
                        <p className="page-title__subtitle">Experience Team Members</p>
                    </div>
                </div>
            </section>
            <div className="hr-line">
                <div className="container py-10">
                    <h2 className="text-center">The Executive Team</h2>
                    <div className="flex justify-center mx-auto mt-6">
                        <span className="w-40 h-1 rounded-full"></span>
                        <span className="w-3 h-1 mx-1 rounded-full"></span>
                        <span className="w-1 h-1 rounded-full"></span>
                    </div>
                    <p className="mx-auto text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                    </p>
                </div>
            </div>
            <div className="grid-list">
                <div className="grid-item grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                    <div className="px-12 py-8 transition-colors duration-300 transform border hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex sm:-mx-4 sm:flex-row">
                            <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">arthur melo</h1>

                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">design director</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.</p>
                        <div className="flex mt-4 -mx-2"></div>
                    </div>

                    <div className="px-12 py-8 transition-colors duration-300 transform border hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                        <div className="flex sm:-mx-4 sm:flex-row">
                            <img alt="" className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/>

                            <div className="mt-4 sm:mx-4 sm:mt-0">
                                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Amelia. Anderson</h1>

                                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lead Developer</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.</p>
                        <div className="flex mt-4 -mx-2"></div>
                    </div>
                </div>
            </div>
            <div className="list">
                <ul className="team">
                    <li className="member co-funder">
                        <div className="thumb"><img alt="" src="https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120" /></div>
                        <div className="description">
                            <h3>Staff 1</h3>
                            <p>Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.<br /><a href="https://www.linkedin.com/">@staff1</a></p>
                        </div>
                    </li>
                    <li className="member co-funder">
                        <div className="thumb"><img alt="" src="https://assets.codepen.io/2/internal/avatars/users/default.png?height=120&width=120" /></div>
                        <div className="description">
                            <h3>Staff 2</h3>
                            <p>Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.<br /><a href="https://www.linkedin.com/">@staff2</a></p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src="https://cpwebassets.codepen.io/assets/packs/about-rachelsmith-6878ca76a1d9200e6c296e810050b8cb.jpg?height=120&width=120" /></div>
                        <div className="description">
                            <h3>Staff 3</h3>
                            <p>Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.<br /><a href="https://www.linkedin.com/">@staff3</a></p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src="https://cpwebassets.codepen.io/assets/packs/about-robertkieffer-77c28f3a6efe082fd1903affae540b8a.jpg?height=120" /></div>
                        <div className="description">
                            <h3>Staff 4</h3>
                            <p>Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.<br /><a href="https://www.linkedin.com/">@staff4</a></p>
                        </div>
                    </li>
                    <li className="member">
                        <div className="thumb"><img alt="" src="https://cpwebassets.codepen.io/assets/packs/about-deevazquez-c8e8b7f9e803f462b7be19ea60b9272f.jpg?height=120&width=120" /></div>
                        <div className="description">
                            <h3>Staff 5</h3>
                            <p>Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type.<br /><a href="https://www.linkedin.com/">@staff5</a></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
