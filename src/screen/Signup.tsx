import React from "react";
import da from "../assets/SignUp.jpg";
const Signup = () => {
	return (
		<div>
			<section className="text-gray-700 bg-gray-900 body-font">
				<div className="container px-10 py-20 mx-auto flex flex-wrap items-center">
					<div className="lg:w-3/5 md:w-1/2 md:pr-10 lg:pr-0 pr-0">
						<img alt="..." src={da} />
					</div>
					<div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
						<h2 className="text-white text-lg font-medium title-font mb-5">
							Register Here
						</h2>
						<div className="relative mb-4">
							<label
								htmlFor="full-name"
								className="leading-7 text-sm text-gray-400"
							>
								Full Name
							</label>
							<input
								type="text"
								id="full-name"
								name="full-name"
								className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="email"
								className="leading-7 text-sm text-gray-400"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="password"
								className="w-full text-sm text-gray-400"
							>
								Passwords
							</label>
							<br />
							<input
								type="password"
								id="password"
								name="password"
								placeholder="Password"
								className="w-1/2 mb-2 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
							<input
								type="confPassword"
								id="confPassword"
								name="confPassword"
								placeholder="Confirm Password"
								className="w-1/2 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="phone"
								className="leading-7 text-sm text-gray-400"
							>
								Phone Number
							</label>
							<input
								type="number"
								id="number"
								name="number"
								className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<div className="relative mb-6">
							<label
								htmlFor="address"
								className="leading-7 text-sm text-gray-400"
							>
								Full Address (including H.No)
							</label>
							<textarea
								id="address"
								name="address"
								className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>

						<button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
							Sign Up
						</button>
						<p className="text-xs mt-3">
							Literally you probably haven't heard of them jean
							shorts.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Signup;
