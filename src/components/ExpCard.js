import './ExpCard.css'
import '../App.css'
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useState } from 'react';

function ExpCard(props) {
	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	return (
		<motion.div 
			className={hovered ? "bubbles" : ""}
			style={{
				borderRadius: 20,
				backgroundPosition: `${Math.random()*100}% ${Math.random()*100}%`
			}}
		>
			<Card 
				className={hovered ? "glass" : ""}
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}
				sx={{
					maxWidth: 500,
					borderRadius: '20px',
					background: 'none',
					color: 'white'
				}}
			>
				<CardContent>
					<Typography variant="h5" component="h2" sx={{ mb: 1 }}>{props.exp.position}</Typography>
					<Typography variant="h6" sx={{fontStyle: 'italic'}}>{props.exp.company}</Typography>
					<Typography variant="body2">{props.exp.description}</Typography>
				</CardContent>
			</Card>
		</motion.div>
	);
}

export default ExpCard;