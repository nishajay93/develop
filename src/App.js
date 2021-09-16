import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LegalNotices from './Mockdata.json';
import DragIndicatorRounded from '@material-ui/icons/DragIndicatorRounded';
import HighlightOffIcon  from '@material-ui/icons/HighlightOff';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';

const data=LegalNotices.legalNoticeData;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function BasicTable() {
  const classes = useStyles();

  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Accordion 1</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Typography>
            Legal notices
          </Typography>
        </AccordionDetails>
    <TableContainer >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>PageTitle</TableCell>
            <TableCell>Portal</TableCell>
            <TableCell>LoginType</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.id}>
                <TableCell align="left"><DragIndicatorRounded/></TableCell>
              <TableCell component="th" scope="row">
                {d.legalNoticeName}
              </TableCell>
              <TableCell align="left">
                  {d.portalsData.brokerPortalSelected && d.portalsData.employeePortalSelected &&
                  d.portalsData.employerPortalSelected ? Object.values(d.portalsData).join(",") : null
                  }</TableCell>
              <TableCell align="left">{d.loginType.Authenticated 
              && d.loginType.NonAuthenticated? Object.values(d.loginType).join(","): null}</TableCell>
              <TableCell align="left">{d.pageContent.isActive?"YES":"NO"}</TableCell>
              <TableCell align="left"><HighlightOffIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <AccordionActions>
        <Button>
            <AddCircleOutlineIcon/>add new item
        </Button>
    </AccordionActions>
    </Accordion>
  );
}
