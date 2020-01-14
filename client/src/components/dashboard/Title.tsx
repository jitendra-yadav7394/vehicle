import * as React from 'react';
import Typography from '@material-ui/core/Typography';


const Title = (props:titleProps) => (
	<Typography component="h2" variant="h6" color="primary" gutterBottom>
    {props.children}
  </Typography>
)

export default Title

interface titleProps {
	children: React.ReactChildren;
}
