import img from "../assets/airTest.jpg";
import maintenance from "../assets/Mantenimiento.png";
import repair from "../assets/airRepair.jpg";

export const products = [
    {
       id: 1,
       name: 'Rick Sanchez',
       price: '$123.000',
       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure cumque commodi illo corporis quod fugiat suscipit laudantium ipsum? Odio illo laboriosam sit inventore alias praesentium, ipsum repellendus dolorum quibusdam aut.",
       image: img
    },
    {
       id: 2,
       name: 'Morty Smith',
       price: '$500.000',
       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure cumque commodi illo corporis quod fugiat suscipit laudantium ipsum? Odio illo laboriosam sit inventore alias praesentium, ipsum repellendus dolorum quibusdam aut.",
       image: img
    },
    {
       id: 3,
       name: 'Summer Smith',
       price: '$20.000',
       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure cumque commodi illo corporis quod fugiat suscipit laudantium ipsum? Odio illo laboriosam sit inventore alias praesentium, ipsum repellendus dolorum quibusdam aut.",
       image: img
    },
    {
       id: 4,
       name: 'Beth Smith',
       price: '$1.000.000',
       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure cumque commodi illo corporis quod fugiat suscipit laudantium ipsum? Odio illo laboriosam sit inventore alias praesentium, ipsum repellendus dolorum quibusdam aut.",
       image: img
    },
    {
       id: 5,
       name: 'Jerry Smith',
       price: '$34.567',
       description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure cumque commodi illo corporis quod fugiat suscipit laudantium ipsum? Odio illo laboriosam sit inventore alias praesentium, ipsum repellendus dolorum quibusdam aut.",
       image: img
    },
];

export const imgSlider = [
   {
      title: "img1",
      img: maintenance
   },
   {
      title: "img2",
      img: img
   },
   {
      title: "img3",
      img: maintenance
   },
   {
      title: "img4",
      img: img
   },
   {
      title: "img5",
      img: maintenance
   }
]

export const repairGrid = [
   {
      title: "Título 1",
      img: repair
   },
   {
      title: "Título 2",
      img: repair
   },
   {
      title: "Título 3",
      img: repair
   }
]