import * as TiIcons from 'react-icons/io5';

interface Items {
	title: string;
	path: string;
	icon: JSX.Element;
}

export const Data: Items[] = [
	{
		title: 'Inicio',
		path: '/',
		icon: <TiIcons.IoHomeOutline size={32} />,
	},
	{
		title: 'Sobre Mi',
		path: '/about-me',
		icon: <TiIcons.IoPersonOutline size={32} />,
	},
	{
		title: 'Habilidades',
		path: '/skills',
		icon: <TiIcons.IoDocumentAttachOutline size={32} />,
	},
	{
		title: 'Projects',
		path: '/projects',
		icon: <TiIcons.IoCodeSlashOutline size={32} />,
	},
	{
		title: 'Contacto',
		path: '/contact',
		icon: <TiIcons.IoMailOutline size={32} />,
	},
];
