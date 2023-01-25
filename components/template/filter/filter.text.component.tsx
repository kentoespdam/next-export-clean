import AddOutlined from "@mui/icons-material/AddOutlined";
import { InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Tooltip from "@mui/material/Tooltip";

interface IFilterTextComponent {
	searchValue: unknown;
	setSearchValue: (value: unknown) => void;
	addFilterHandler: () => void;
}
const FilterTextComponent = (props: IFilterTextComponent) => {
	const { searchValue, setSearchValue, addFilterHandler } = props;

	return (
		<FormControl fullWidth>
			<InputLabel>search</InputLabel>
			<OutlinedInput
				id="searchInput"
				placeholder="search"
				label="search"
				value={searchValue}
				onChange={(e) => setSearchValue(e.currentTarget.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") addFilterHandler();
				}}
				endAdornment={
					<InputAdornment
						position="end"
						component="div"
						onClick={addFilterHandler}
					>
						<Tooltip title="Add Filter">
							<IconButton
								color="primary"
								aria-labelledby="searchInput"
							>
								<AddOutlined />
							</IconButton>
						</Tooltip>
					</InputAdornment>
				}
			/>
		</FormControl>
	);
};

export default FilterTextComponent;
