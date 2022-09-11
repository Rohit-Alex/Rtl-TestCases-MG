import React, { useState } from 'react';
import { Button, Select } from 'antd';

const { Option } = Select;
const MoveSections = () => {
    const [selectedClass, setSelectedClass] = useState('')
    const [selectedSection, setSelectedSection] = useState('')
    const [selectedSubject, setSelectedSubject] = useState('')
    const [selectedChapter, setSelectedChapter] = useState('')

    const createDiv = (name, parent = '') => {
        const div = document.createElement('div')
        div.classList.add(name)
        div.innerHTML = name
        if (parent) parent.appendChild(div)
        return div
    }

    const handleMove = () => {
        const sourceContainer = document.getElementsByClassName('source-container')[0]
        const clonedNode = sourceContainer.cloneNode(true)
        const targetContainer = document.getElementsByClassName('Target-container')?.[0] ?? createDiv('Target-container')
        const targetClass = [...targetContainer.childNodes].find(x => x.className === selectedClass) ?? createDiv(selectedClass, targetContainer)
        const targetSection = [...targetClass.childNodes].find(x => x.className === selectedSection) ?? createDiv(selectedSection, targetClass)
        const targetSubject = [...targetSection.childNodes].find(x => x.className === selectedSubject) ?? createDiv(selectedSubject, targetSection)
        const targetTopics = [...targetSubject.childNodes].find(x => x.className === selectedChapter) ?? createDiv(selectedChapter, targetSubject)
        console.log(targetTopics, 'targetTopics');
        targetTopics.appendChild(clonedNode)
    }

    return (
    <div className='Move-container ml-10'>
        <div className='source-container'>Source container
            <h2> source header
                <h4>
                    source sub header
                </h4>
            </h2>
        </div>
        <div className='Move-container-class mt-4'>
            <Select style={{ width: 300 }} value={selectedClass} onChange={(value) => setSelectedClass(value)}>
                <Option value="x">X</Option>
                <Option value="xi">XI</Option>
                <Option value="xii">XII</Option>
            </Select>
        </div>
        <div className='Move-container-section mt-4'>
            <Select style={{ width: 300 }} value={selectedSection} onChange={(value) => setSelectedSection(value)}>
                <Option value="a">A</Option>
                <Option value="b">B</Option>
                <Option value="c">C</Option>
                <Option value="d">D</Option>
            </Select>
        </div>
        <div className='Move-container-subject mt-4'>
            <Select style={{ width: 300 }} value={selectedSubject} onChange={(value) => setSelectedSubject(value)}>
                <Option value="math">Math</Option>
                <Option value="physics">Physics</Option>
                <Option value="chemistry">Chemistry</Option>
                <Option value="bio">Biology</Option>
            </Select>
        </div>
        <div className='Move-container-chapter mt-4'>
            <Select style={{ width: 300 }} value={selectedChapter} onChange={(value) => setSelectedChapter(value)}>
                <Option value="algebra">Algebra</Option>
                <Option value="trigo">Trigonometry</Option>
                <Option value="calculas">Calculas</Option>
                <Option value="matrix">Matrix</Option>
            </Select>
        </div>
        <div className='Move-container-action mt-4'>
            <Button className='Move-container-action Cancel-btn'>Cancel</Button>
            <Button className='Move-container-action Move-btn ml-4' onClick={handleMove}>Move</Button>
        </div>
        <div className='Target-container'>
            <div className='x'>X
                <div className='a'>A
                    <div className='math'>Math
                        <div className='algebra'>Algebra
                            <div>polynomials</div>
                        </div>
                        <div className='trigo'>Trigonometry
                            <div>Angles</div>
                        </div>
                        <div className='calculas'>Calculas
                            <div>simple integration</div>
                        </div>
                    </div>
                    <div className='physics'>PHYSICS
                    <div className='light'>Light</div>
                    </div>
                </div>
                <div className='b'></div>
            </div>
            <div className='xi'></div>
            <div className='xii'></div>
            <div className='ix'></div>
        </div>
    </div>
    )
};

export default MoveSections
