import './ExpCard.css'
import '../App.css'
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { complex, motion } from "motion/react";
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

// function ExpCard() {
// 	return (
// 		<motion.div>
// 			{/* <motion.h4>Position</motion.h4>
// 			<motion.h5>Company</motion.h5>
// 			<motion.p>description</motion.p> */}
// 			<Box
// 				bgcolor="black"
// 				display="flex"
// 				justifyContent="center"
// 				width="100%"
// 			>
// 				<Container
// 					maxWidth={false}
// 					sx={{position: "relative", height: "982px", maxWidth: "1512px"}}
// 				>
// 					<Typography 
// 						variant="h1"
// 						color="white"
// 						// sx={{
// 						// 	position: "absolute",
// 						// 	top: "229px",
// 						// 	left: "142px",
// 						// 	width: "1228px",
// 						// }}
// 					>
// 						{internshipData.map((internship, i) => {
// 							<Grid item key={i} xs={6}>
// 								<Box sx={{position: "relative", width: "562px", height: "594px"}}>
// 									<Typography
// 										variant="h2"
// 										color="white"
// 										// sx={{
// 										// 	position: "absolute",
// 										// 	top: "43px",
// 										// 	left: "44px",
// 										// 	width: "231px",
// 										// }}
// 									>
// 										{/* {internship.position} */}
// 										Position
// 									</Typography>

// 									<Typography
// 										variant="h3"
// 										color="white"
// 										// sx={{
// 										// 	position: "absolute",
// 										// 	top: "88px",
// 										// 	left: "44px",
// 										// 	width: "273px",
// 										// }}
// 									>
// 										{internship.company}
// 									</Typography>

// 									<Typography
// 										variant="body1"
// 										color="white"
// 										// sx={{
// 										// 	position: "absolute",
// 										// 	top: "136px",
// 										// 	left: "44px",
// 										// 	width: "474px",
// 										// }}
// 									>
// 										{internship.description}
// 									</Typography>
// 								</Box>
// 							</Grid>
// 						})}
// 					</Typography>
// 				</Container>
// 			</Box>
// 		</motion.div>
// 	);
// }

export default ExpCard;