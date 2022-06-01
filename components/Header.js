import Image from 'next/image';
import React from 'react';
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/client';
import {
	FlagIcon,
	PlayIcon,
	ShoppingCartIcon,
	SearchIcon,
} from '@heroicons/react/outline';

import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	HomeIcon,
	UserGroupIcon,
	ViewGridIcon,
	UserIcon,
} from '@heroicons/react/solid';
function Header() {
	const [session] = useSession();
	return (
		<div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
			{/* Left */}

			<div className='flex items-center'>
				<Image
					src='https://links.papareact.com/5me'
					width={40}
					height={40}
					layout='fixed'
					alt=''
				/>

				<div className='md:inline-flex flex ml-2 items-center rounded-full bg-gray-100 p-2'>
					<SearchIcon className='h-6 text-gray-600' />
					<input
						type='text'
						placeholder='Search Facebook'
						className='hidden flex-shrink
                    md:inline-flex
                 placeholder-gray-500 outline-none ml-2 items-center bg-transparent'
					/>
				</div>
			</div>
			{/* Center */}
			<div className='flex justify-center flex-grow'>
				<div className='flex space-x-6 md:space-x-2'>
					<HeaderIcon Icon={HomeIcon} active />
					<HeaderIcon Icon={FlagIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
				</div>
			</div>
			{/* Right */}

			<div className='flex items-center sm:space-x-2 justify-end'>
				{/* Profile Pic - <Image /> */}
				{session.user.image ? (
					<Image
						onClick={signOut}
						className='rounded-full cursor-pointer'
						src={session.user.image}
						width={40}
						height={40}
						layout='fixed'
						alt=''
					/>
				) : (
					<UserIcon className='icon' onClick={signOut} />
				)}
				<p className='whitespace-nowrap font-semibold pr-3'>
					{' '}
					{session.user.name}
				</p>
				<ViewGridIcon className='icon' />
				<ChatIcon className='icon' />
				<BellIcon className='icon' />
				<ChevronDownIcon className='icon' />
			</div>
		</div>
	);
}

export default Header;
