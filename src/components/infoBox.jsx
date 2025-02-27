import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Box } from '@mui/material';

export default function InfoBox({ info }) {
    const [searched, setSearched] = useState(false);

    // Detect when a search is performed
    useEffect(() => {
        if (info && info.city) {
            setSearched(true);
        }
    }, [info]);

    let Hot_url = "https://plus.unsplash.com/premium_photo-1711662177249-138d96f8c4d6?w=600&auto=format&fit=crop&q=60";
    let Rain_url = "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?w=600&auto=format&fit=crop&q=60";
    let Cold_url = "https://plus.unsplash.com/premium_photo-1704539395750-6d3ab4481521?w=600&auto=format&fit=crop&q=60";

    // Random thoughts for first-time users
    const thoughts = [
        "Any thought for the weather today?",
        "Wondering about the weather? Let's find out!",
        "Planning your day? Check the weather first!",
        "Will it be sunny or rainy? Let's see!",
        "Stay prepared! What's the weather like?",
    ];

    const firstTimeMessage = thoughts[Math.floor(Math.random() * thoughts.length)];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
            {info && info.city ? (
                <Card 
                    sx={{ 
                        width: 360, 
                        height: 320,  
                        borderRadius: 3, 
                        boxShadow: 3, 
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': { transform: 'scale(1.05)' }
                    }}
                >
                    <CardMedia
                        sx={{ height: 160 }} 
                        image={info.humidity > 80 ? Rain_url : info.temp > 15 ? Hot_url : Cold_url}
                        title="Weather Condition"
                    />
                    <CardContent sx={{ height: 160, overflow: 'hidden' }}> 
                        <Typography 
                            variant="h5" 
                            component="div" 
                            sx={{ display: 'flex', alignItems: 'center', gap: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
                        >
                            {info.city}
                            {info.humidity > 80 ? <ThunderstormIcon color="primary" /> : 
                             info.temp > 15 ? <WbSunnyIcon color="warning" /> : 
                             <AcUnitIcon color="info" />}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                            <strong>Temperature:</strong> {info.temp}&deg;C <br />
                            <strong>Humidity:</strong> {info.humidity}% <br />
                            <strong>Min Temp:</strong> {info.temp_min}&deg;C <br />
                            <strong>Max Temp:</strong> {info.temp_max}&deg;C <br />
                            <strong>Weather:</strong> <i>{info.weather}</i>, Feels like <strong>{info.feelsLike}&deg;C</strong>!
                        </Typography>
                    </CardContent>
                </Card>
            ) : (
                <Typography sx={{ textAlign: 'center', color: 'text.secondary', fontSize: 18, fontStyle: 'italic' }}>
                    {!searched ? firstTimeMessage : "City not found. Please check the spelling."}
                </Typography>
            )}
        </Box>
    );
}
