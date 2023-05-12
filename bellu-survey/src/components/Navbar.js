export default function Navbar ()
{
	return (
		<>
			<nav className="bg-[#e1c2bd]">
				<div className="flex items-center justify-center">
					<img src="/images/bellu-labs-1.png" alt="Bellu Labs Logo" className="h-12 w-12" />
					<h1 className="m-7 text-white font-medium logo text-5xl">bellu labs</h1>
				</div>

			</nav>
			<div className="flex flex-row justify-center space-x-4 p-4 h-32">
				<div className="px-3 flex items-center justify-center border-2 border-solid border-[##778996] basis-2/12">Hair & Scalp</div>
				<div className="px-3 flex items-center justify-center border-2 border-solid border-[##778996] basis-6/12">Lifestyle</div>
				<div className="px-3 flex items-center justify-center border-2 border-solid border-[##778996] basis-3/12">History</div>
				<div className="px-3  flex items-center justify-center border-2 border-solid border-[##778996] basis-1/12">Goals & Preferences</div> {/* changed from Goals & Preferences to make it fit better */ }
			</div>

		</>
	);
}
