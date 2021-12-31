import { serviceNewId } from '../helpers/funcoesAuxiliares';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DEFAULT_OPTIONS = [
  { id: '1', description: 'Opção 1' },
  { id: '2', description: 'Opção 2' },
  { id: '3', description: 'Opção 3' },
];

export default function SelectBox({
  selectedValue = DEFAULT_OPTIONS[0].id,
  onChangeValue = null,
  children: options = DEFAULT_OPTIONS,
  labelDescription = 'Label para o <select>',
  id = serviceNewId(),
}) {
  function handleValueChange(event) {
    if (onChangeValue) {
      onChangeValue(event.target.value);
    }
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id={id}>{labelDescription}</InputLabel>
      <Select
        labelId={id}
        //id="year-id"
        value={selectedValue}
        onChange={handleValueChange}
        autoWidth
        //label="Ano"
        variant="filled"
      >
        {options.map(({ id, description }) => {
          return (
            <MenuItem key={id} value={id}>
              {description}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

// const optionsMes = [
//   { id: serviceNewId(), value: '-01', label: 'Janeiro' },
//   { id: serviceNewId(), value: '-02', label: 'Fevereiro' },
//   { id: serviceNewId(), value: '-03', label: 'Março' },
//   { id: serviceNewId(), value: '-04', label: 'Abril' },
//   { id: serviceNewId(), value: '-05', label: 'Maio' },
//   { id: serviceNewId(), value: '-06', label: 'Junho' },
//   { id: serviceNewId(), value: '-07', label: 'Julho' },
//   { id: serviceNewId(), value: '-08', label: 'Agosto' },
//   { id: serviceNewId(), value: '-09', label: 'Setembro' },
//   { id: serviceNewId(), value: '-10', label: 'Outubro' },
//   { id: serviceNewId(), value: '-11', label: 'Novembro' },
//   { id: serviceNewId(), value: '-12', label: 'Dezembro' },
// ];
