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
		icon: <TiIcons.IoHomeOutline size={25} />,
	},
	{
		title: 'Sobre Mi',
		path: '/SobreMi',
		icon: <TiIcons.IoPersonOutline size={25} />,
	},
	{
		title: 'Habilidades',
		path: '/Habilidades',
		icon: <TiIcons.IoDocumentAttachOutline size={25} />,
	},
	{
		title: 'Projects',
		path: '/Proyectos',
		icon: <TiIcons.IoCodeSlashOutline size={25} />,
	},
	{
		title: 'Contacto',
		path: '/Contacto',
		icon: <TiIcons.IoMailOutline size={25} />,
	},
];
