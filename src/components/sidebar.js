import React, { useState } from 'react';
import Feedback from './Feedback';
import { Card, CardBody } from '@chakra-ui/card';
import { Button, Heading, Text, Grid, GridItem } from '@chakra-ui/react';
import SquareCard from './SquareCard';
import VerticalCard from './Verticalcard';

export default function Sidebar() {
    const [isFeedbackFormOpen, setIsFeedbackFormOpen] = useState(false);
    const [isVertical, setIsVertical] = useState(true); // Default is set to Vertical

    const toggleCardLayout = () => {
        setIsVertical(!isVertical);
    };

    const toggleFeedbackForm = () => {
        setIsFeedbackFormOpen(!isFeedbackFormOpen);
    };

    return (
        <div className='sidebar'>
            <h2>Sidebar</h2>

            {/* Employee Card */}



            <Card align='center' className='employee-card'>
                <CardBody>
                    <Grid gap={4}>
                        <GridItem colSpan={2} ><img
                            src='https://cdn3.iconfinder.com/data/icons/avatars-collection/256/39-1024.png'
                            alt='Employee Photo'
                            className='employee-photo'
                        /></GridItem>
                        <GridItem colStart={4} colEnd={6} style={{ marginTop: '-20px' }}  >
                            <h4>Hey Ridder<br /> Here's your news !</h4>


                        </GridItem>
                    </Grid>


                </CardBody>
            </Card>


            <div>
            <Card align='center' className='feedback-card'>
         <button onClick={toggleCardLayout}>
                {isVertical ? 'Toggle to Square Cards' : 'Toggle to Vertical Cards'}
            </button>
                <div className="content">
                    {isVertical ? <VerticalCard /> : <SquareCard />}
                </div>
   
            </Card>
            </div>
            {/* Feedback Card */}
            <Card align='center' className='feedback-card'>
                <CardBody>
                    <Button
                        style={{ backgroundColor: isFeedbackFormOpen ? 'lightred' : 'lightgreen' }}
                        onClick={toggleFeedbackForm}
                    >
                        {isFeedbackFormOpen ? 'Close Feedback' : 'Open Feedback'}
                    </Button>
                    {isFeedbackFormOpen && (
                        <div className='feedback-form-overlay'>
                            <Button onClick={toggleFeedbackForm}>
                                &times;
                            </Button>
                            <Feedback />
                        </div>
                    )}
                </CardBody>
            </Card>
        </div>
    );
}




