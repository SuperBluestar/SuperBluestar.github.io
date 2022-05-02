import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
// import { getDbClient } from '../../api/utils/db';

let dbClient: MongoClient;
export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    // dbClient = await getDbClient();
    // const data = await dbClient.db().collection('projects').find({}).project({ _id: 0 }).toArray();
    const data = [
      {
        slug: 'blockchain-1',
        tagline: 'Smart Contract Developer, Frontend Team Tech Leader, Backend Supporter',
        description: `
        This is Dex protocal and building project with React and web3 and solidity smart contract.
      `,
        img: '/images/projects/superbluestar_paraswap.png',
        name: 'Paraswap',
        tags: [
          'Javascript',
          'Typescript',
          'NodeJS',
          'Solidity',
          'ReactJS',
          'Redux',
          'CSS3',
          'SASS',
          'Bootstrap',
          'Tailwind',
          'Nestjs',
          'MongoDB',
          'CanvasJS',
          'Chartjs',
          'AWS',
          'Vercel',
          'Github',
          'Jira'
        ],
        github: 'https://github.com/paraswap',
        category: ['Web', 'Blockchain', 'Dex'],
        featured: true,
        launch_video: '',
        url: ''
      },
      {
        slug: 'blockchain-2',
        tagline: 'Smart Contract Developer',
        description: 'Dao platform and participated in developing smart contract',
        img: '/images/projects/superbluestar_dao.png',
        name: 'Pie Dao',
        tags: [
          'Typescript',
          'NodeJS',
          'Solidity',
          'ReactJS',
          'Redux',
          'CSS3',
          'SASS',
          'Bootstrap',
          'Tailwind',
          'Nestjs',
          'MongoDB',
          'CanvasJS',
          'Chartjs',
          'AWS',
          'Vercel',
          'Github',
          'Jira'
        ],
        github: 'https://github.com/pie-dao',
        category: ['Web', 'Blockchain', 'Dao'],
        featured: true,
        launch_video: '',
        url: ''
      },
      {
        slug: 'blockchain-3',
        tagline: 'Frontend Developer',
        description: 'Defi Platform',
        img: '/images/projects/superbluestar_crystl.png',
        name: 'Pie Dao',
        tags: [
          'Typescript',
          'NodeJS',
          'Solidity',
          'ReactJS',
          'Redux',
          'CSS3',
          'SASS',
          'Bootstrap',
          'Tailwind',
          'Nestjs',
          'MongoDB',
          'CanvasJS',
          'Chartjs',
          'AWS',
          'Vercel',
          'Github',
          'Jira'
        ],
        github: 'https://github.com/Polycrystal',
        category: ['Web', 'Blockchain', 'Defi'],
        featured: true,
        launch_video: '',
        url: ''
      },
      {
        slug: 'web-1',
        tagline: 'Web Developer',
        description: 'Django project',
        img: '/images/projects/superbluestar_django.png',
        name: 'Online Interior Design Service',
        tags: [
          'Typescript',
          'NodeJS',
          'ReactJS',
          'Redux',
          'CSS3',
          'SASS',
          'Bootstrap',
          'Tailwind',
          'Django',
          'GraphQL',
          'PostgreSQL',
          'AWS',
          'Vercel',
          'Github',
          'Jira'
        ],
        category: ['Web'],
        featured: true,
        launch_video: '',
        url: ''
      },
      {
        slug: 'web-2',
        tagline: 'Web Developer',
        description: 'Laravel-Vue project',
        img: '/images/projects/superbluestar_hiring_agency.jpg',
        name: 'Agency',
        tags: [
          'Vue',
          'Typescript',
          'NodeJS',
          'CSS3',
          'SASS',
          'Bootstrap',
          'Tailwind',
          'Laravel',
          'MySQL',
          'AWS',
          'Sakura',
          'Github',
          'Jira'
        ],
        category: ['Web'],
        featured: true,
        launch_video: '',
        url: ''
      },
      {
        slug: 'web-3',
        tagline: 'Web Developer',
        description: 'Web project',
        img: '/images/projects/superbluestar_showroom.png',
        name: 'Agency',
        tags: [
          'Vue',
          'React',
          'Typescript',
          'NodeJS',
          'CSS3',
          'SASS',
          'Bootstrap',
          'Tailwind',
          'Laravel',
          'NestJS',
          'PostgreSQL',
          'AWS',
          'Sakura',
          'Github',
          'Jira'
        ],
        category: ['Web'],
        featured: true,
        launch_video: '',
        url: ''
      }
    ];
    res.statusCode = 200;
    res.json(data);
  } catch (err) {
    res.statusCode = 500;
    res.json({ success: false, error: err });
  }
};
