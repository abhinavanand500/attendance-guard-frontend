import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="relative overflow-hidden text-gray-400 bg-gray-800">
			<div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
				<div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
					<div className="sm:max-w-lg">
						<h1 className="font text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
							Basant Vihar Colony is finally LIVE!!
						</h1>
						<p className="mt-4 text-xl text-gray-500">
							This year, our new summer collection will shelter
							you from the harsh elements of a world that doesn't
							care if you live or die.
						</p>
					</div>
					<div>
						<div className="mt-10">
							<div
								aria-hidden="true"
								className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
							>
								<div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
									<div className="flex items-center space-x-6 lg:space-x-8">
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
												<img
													src="https://pbs.twimg.com/media/DiHysSEX0AAhxZz.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/5e/c0/46/drone-shot-of-the-valley.jpg?w=500&h=400&s=1"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://i.pinimg.com/736x/87/45/ec/8745ec2a4c6694ba3005ec89347d3c1c.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://pbs.twimg.com/media/EYcI1plXQAELNkn.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://pbs.twimg.com/media/E7EVMp7XsAoo5IQ.jpg:large"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
										<div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://www.jagranimages.com/images/newimg/25062022/Deori%20Temple%20Ranchi%20(1).jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
											<div className="h-64 w-44 overflow-hidden rounded-lg">
												<img
													src="https://images.hindustantimes.com/img/2023/01/31/550x309/dhoni-getty-2016_1675185205457_1675185211549_1675185211549.jpg"
													alt=""
													className="h-full w-full object-cover object-center"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<Link
								to="/"
								className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
							>
								Shop Collection
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
