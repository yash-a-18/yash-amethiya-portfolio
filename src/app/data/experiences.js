import YEP from "../../../public/YEP.jpg";
import Aurora from "../../../public/Aurora.png";
import LakeheadIntl from "../../../public/LakeheadIntl.png";
import Lakehead from "../../../public/LakeheadCS.png";
import IPR from "../../../public/IPR.png";
import Verzeo from "../../../public/Verzeo.png";

export const experiences = [
    {
        image: Aurora,
        alt: 'Aurora',
        title: 'Software Developer',
        company: 'Aurora Constellations',
        date: 'August 2024 - Present',
        gained_skills: [
            'Langium',
            'Sprotty',
            'VS Code Extension Development',
            'Scala.js',
            'Frontend-Backend Integration',
            'DSL Syntax and Error Checking',
            'Healthcare Workflow Visualization',
            'Software Design and Architecture',
            'Tooling and IDE Support'
        ],
        job: [
            'Designed and implemented a Domain-Specific Language using Langium for creating structured patient medical plans.',
            'Developed dynamic visual diagrams for patient treatment workflows using Sprotty.',
            'Built a VS Code extension to integrate DSL-based language support, enabling syntax highlighting, auto-completion, and error checking.',
            'Integrated a Patient Tracker system and backend server directly within the VS Code extension, improving accessibility for healthcare professionals.',
            'Worked with Scala.js for frontend components and ensured seamless integration with the backend services.'
        ]
    },
    {
        image: YEP,
        alt: 'YEP',
        title: 'Software Developer',
        company: 'Aurora Constellations, Youth Effect Program by Northwestern Ontario Innovation Centre',
        date: 'July 2024 - August 2024',
        gained_skills: [
            'ZIO',
            'PostgreSQL',
            'Docker',
            'REST API Development',
            'Unit Testing',
            'Postman API Testing',
            'Code Reviews',
            'Technical Documentation',
            'Team Collaboration'
        ],
        job: [
            'Optimized patient data retrieval by upgrading the patient tracking system using ZIO, reducing response time by 30%.',
            'Designed and deployed a scalable PostgreSQL database schema in Docker, improving data consistency and maintainability.',
            'Implemented REST API endpoints using Tapir, enabling seamless communication between the frontend and backend.',
            'Enhanced code reliability and API stability by writing unit tests and rigorously testing endpoints with Postman, ensuring a bug-free deployment.',
            'Collaborated with senior developers in code reviews, improving code quality and aligning with industry best practices.',
            'Successfully completed the Youth Effect Program, contributing to real-world software solutions and expanding technical expertise.'
        ]
    },
    {
        image: Lakehead,
        alt: 'ResearchGraduate',
        title: 'Research Graduate',
        company: 'Lakehead University',
        date: 'September 2023 - April 2024',
        gained_skills: [
            'Research',
            'Publication & Academic Writing',
            'Computer Vision',
            'PyTorch',
            'Data Science & Analysis'
        ],
        job: [
            'Published a comprehensive method utilizing a Region-Based Convolutional Neural Network (RCNN) with VGG19 to achieve a ~93% detection accuracy in PDF pages, while deploying smart pre-processing techniques like Smudging.',
            'Fine-tuned a split-and-merge technique for table structure recognition, yielding a weighted average F1 score of 52.3%, surpassing SOTA CascadeTabNet&apos;s score of 23.2%, ensuring generalizability across diverse document sets.'
        ]
    },
    {
        image: Lakehead,
        alt: 'LUCS',
        title: 'Teaching Assistant',
        company: 'Lakehead University (Dept. of CS)',
        date: 'January 2024 - April 2024',
        gained_skills: [
            'Programming Languages (C and C++)',
            'Instructional Design',
            'Teaching and Tutoring',
            'Classroom Management',
            'Assessment and Feedback',
            'Team Collaboration'
        ],
        job: [
            'Assisted in organizing and conducting C programming labs for a diverse group of 45 undergraduate students, resulting in improved understanding and application of coding concepts.',
            'Led C++ programming labs for approximately 70 undergrad students, offering individualized support to clarify doubts and enhance their coding abilities.',
            'Graded and provided feedback on lab assignments and exams for a class of 45 students, ensuring accuracy and fairness in assessment.'
        ]
    },
    {
        image: LakeheadIntl,
        alt: 'LUIntl',
        title: 'Peer Mentor',
        company: 'Lakehead University International',
        date: 'July 2023 - April 2024',
        gained_skills: [
            'Effective Communication & Supportive Mentorship',
            'Relationship Building & Trust Establishment',
            'Collaboration with Program Coordinators',
            'Information Management & Excel Proficiency',
            'Attention to Detail in Student Records'
        ],
        job: [
            'Mentored around 50 new international students and helped them adjust to the university',
            'Communicated with mentees regularly and resolved their issues',
            'Shared Computer Science knowledge and tips with mentees',
            'Provided reliable information about Lakehead University and its resources',
            'Recorded student data and tracked mentees&apos; progress on Excel',
            'Coordinated airport arrivals for incoming students in the fall'
        ]
    },
    {
        image: IPR,
        alt: 'IPR',
        title: 'Research and Project Intern',
        company: 'Institute for Plasma Research',
        date: 'December 2021 - April 2022',
        gained_skills: [
            'Deep Learning Techniques',
            'Transfer Learning',
            'TensorFlow for Object Detection',
            'Model Integration into Web Applications (Django Framework)',
            'Image Labeling (Labelimg)',
            'MySQL for Data Storage',
            'Leadership and Team Management',
            'Problem-solving and Troubleshooting',
            'Effective Communication of Technical Concepts',
        ],
        job: [
            'Led a team of 4 to develop a project named “Deep Learning for Object Detection in a live video feed”.',
            'Collected around 15000 images using web scrapping, pre-processed them and labelled them using Labelimg.',
            'Achieved accuracies above 95% by Transfer learning from deep neural networks like MobileNet, ResNet, Inception, and VGG for image classification and did object detection using TensorFlow.',
            'Integrated 4 different models into a web application using Django Framework for live object detection.'
        ]
    },
    {
        image: Verzeo,
        alt: 'Verzeo',
        title: 'Machine Learning Intern',
        company: 'Verzeo',
        date: 'May 2020 - July 2020',
        gained_skills: [
            'Data Manipulation',
            'Data Aggregation and Grouping',
            'Time Series Analysis',
            'Boolean Indexing',
            'Algorithm Development',
            'Extensive Data Analysis',
            'Expertise in Data Visualization',
            'In-depth Statistical Analysis',
            'Real-time Predictive Model  ',
            'Hands-on ML Application',
        ],
        job: [
            'Implemented a cutting-edge Machine Learning algorithm based on the latest research.',
            'Performed descriptive and inferential statistics on a large dataset of over 7400 samples.',
            'Explored the data using Seaborn and Matplotlib libraries to uncover hidden patterns and insights.',
            'Leveraged the acquired knowledge to build a car price prediction model & achieved 91.1% accuracy on real-time testing.'
        ]
    },
];
