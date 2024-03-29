import { motion } from 'framer-motion';
import { useState, useContext } from 'react';
import FormContext from '../Context/FormContext';
import './Category.scss'
function Category() {
  const {  setFormData } = useContext(FormContext);
  const [selectedOption, setSelectedOption] = useState(null);

  let categories = [
    'education',
    'recreational',
    'social',
    'diy',
    'charity',
    'cooking',
    'relaxation',
    'music',
    'busywork',
  ];

  return (
    <motion.div className='category-container'>
      <motion.small
        initial='hidden'
        whileInView='visible'
        viewport={{
          margin: '19000px',
        }}
        transition={{ duration: 0.2, delay: 0.75 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}>
        Category
      </motion.small>
      {categories.map((opt, i) => {
        return (
          <motion.button
            initial={{
              opacity: 0,
              scale: 0,
              y: '100',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: '0',
              transition: { delay: 1.5 },
            }}
            className={`category-button ${selectedOption === opt ? 'selected' : ''}`}
            name='category'
            key={i}
            onClick={(e) => {
              console.log(e.target.value);
              setFormData((prevState) => {
                console.log(prevState);
                return {
                  ...prevState,
                  [e.target.name]: e.target.innerText,
                };
              });
              setSelectedOption(opt);
            }}
            whileHover={{
              backgroundColor: '#2c77df',
            }}>
            {opt}
          </motion.button>
        );
      })}
    </motion.div>
  );
}

export default Category;
