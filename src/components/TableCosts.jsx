import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TableCosts({
  //id = 'Id da despesa',
  descricao = 'Descrição da despesa',
  categoria = 'Categoria',
  dia = 'Dia da despesa',
  valor = 'Valor da despesa',
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <colgroup>
          <col style={{ width: '35%' }} />
          <col style={{ width: '25%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
        </colgroup>
        <TableHead>
          <TableRow>
            <StyledTableCell>Despesa</StyledTableCell>
            <StyledTableCell align="left">Categoria</StyledTableCell>
            <StyledTableCell align="center">Dia</StyledTableCell>
            <StyledTableCell align="right">Valor (R$)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell>{descricao}</StyledTableCell>
            <StyledTableCell align="left">{categoria}</StyledTableCell>
            <StyledTableCell align="center">{dia}</StyledTableCell>
            <StyledTableCell align="right">{valor}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
