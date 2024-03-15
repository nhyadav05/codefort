import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react'

export default function SquareCard() {

    return (
        <div className="Vertical" style={{ marginLeft: '100%' }}>


            <Grid templateColumns='repeat(5, 1fr)' gap={20}>
                <GridItem w='100%' h='10' bg='blue.500' >    <div className="card">

                    <div className="card-body">
                        <h2 className="card-title">Selectable Title 1</h2>
                        <p>
                            You can select this text even though the whole card is clickable.{' '}
                            <img src="https://picsum.photos/200/100" alt="..." className="card-img-top" />
                        </p>
                    </div>
                </div></GridItem>
                <GridItem w='100%' h='10' bg='blue.500' >
                    <div className="card">

                        <div className="card-body">
                            <h2 className="card-title">Selectable Title 1</h2>
                            <p>
                                You can select this text even though the whole card is clickable.{' '}
                                <img src="https://picsum.photos/200/100" alt="..." className="card-img-top" />
                            </p>
                        </div>
                    </div>
                </GridItem>

                <GridItem w='100%' h='10' bg='blue.500' >
                    <div className="card">

                        <div className="card-body">
                            <h2 className="card-title">Selectable Title 1</h2>
                            <p>
                                You can select this text even though the whole card is clickable.{' '}
                                <img src="https://picsum.photos/200/100" alt="..." className="card-img-top" />
                            </p>
                        </div>
                    </div>
                </GridItem>

                <GridItem w='100%' h='10' bg='blue.500' >
                    <div className="card">

                        <div className="card-body">
                            <h2 className="card-title">Selectable Title 1</h2>
                            <p>
                                You can select this text even though the whole card is clickable.{' '}
                                <img src="https://picsum.photos/200/100" alt="..." className="card-img-top" />
                            </p>
                        </div>
                    </div>
                </GridItem>


            </Grid>

        </div>
    );
};


