import { NavLink } from 'react-router-dom';

export default function Navbar ()
{
	const activeClass = 'active-navlink';

	return (
		<>
			<nav className="bg-[#e1c2bd]">
				<NavLink to="/" className="flex items-center justify-center">
					<img
						src="https://davemurdock55.github.io/bellu-labs-application/images/bellu-labs-1.png"
						alt="Bellu Labs Logo"
						className="h-12 w-12"
					/>
					<h1 className="m-7 text-white font-medium logo text-5xl">
						bellu labs
					</h1>
				</NavLink>
			</nav>
			<div className="flex flex-row justify-center space-x-4 p-4 pt-2 h-20 text-md font-medium text-[#778996]">
				<NavLink
					to="/hair-and-scalp/hair-type"
					className={ ({ isActive }) =>
						isActive ? `${activeClass} px-3 flex items-center justify-center border-2 border-solid border-[#778996] basis-2/12` : 'px-3 flex items-center justify-center border-2 border-solid border-[#778996] basis-2/12'
					}
				>
					Hair & Scalp
				</NavLink>
				<NavLink
					to="/lifestyle"
					className={ ({ isActive }) =>
						isActive ? `${activeClass} px-3 flex items-center justify-center border-2 border-solid border-[#778996] basis-6/12` : 'px-3 flex items-center justify-center border-2 border-solid border-[#778996] basis-6/12'
					}
				>
					Lifestyle
				</NavLink>
				<NavLink
					to="/history"
					className={ ({ isActive }) =>
						isActive ? `${activeClass} px-3 flex items-center justify-center border-2 border-solid border-[#778996] basis-3/12` : 'px-3 flex items-center justify-center border-2 border-solid border-[#778996] basis-3/12'
					}
				>
					History
				</NavLink>
				<NavLink
					to="/goals-and-preferences"
					className={ ({ isActive }) =>
						isActive ? `${activeClass} px-3 flex items-center justify-center border-2 border-solid border-[#778996] basis-1/12` : 'px-3 flex items-center justify-center border-2 border-solid border-[#778996] basis-1/12'
					}
				>
					Goals
				</NavLink>
			</div>
		</>
	);
}
