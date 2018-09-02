##### menu items

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCoffee,
        faCheck,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
        <GlobalHeader src="images/user/user2.jpg" className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large">
            <ButtonMenu menuAlignment="right" menuSize="small" label="Menu">
                <MenuItem label="Menu Item Header" variant="header" />
                <MenuItem label="Menu Item Base" />
                <MenuItem label="Menu Item Base" />
                <MenuItem label="Menu Item Base" />
                <MenuDivider variant="space" />
                <MenuItem label="Other Menu Item Base" />
                <MenuItem label="Other Menu Item Base" />
            </ButtonMenu>
        </GlobalHeader>
    </div>