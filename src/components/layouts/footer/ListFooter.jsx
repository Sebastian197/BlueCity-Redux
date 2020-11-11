import React from 'react';

const ListFooter = ({ title }) => {
    return (
        <>
            <h5>{title}</h5>
            <ul className='list-unstyled'>
                <li>
                    <a href='http://www.ieselrincon.es'>IES El Rincón</a>
                </li>
                <li>
                    <a href='https://moodle.bernatelferrer.cat/'>Institut Bernat el Ferrer</a>
                </li>
                <li>
                    <a href='http://iesesteveterradas.cat/'>Institut Esteve Terradas</a>
                </li>
                <li>
                    <a href='https://www.furiouskoalas.com/'>Furious Koalas</a>
                </li>
            </ul>
        </>
    )
}

export default ListFooter;
