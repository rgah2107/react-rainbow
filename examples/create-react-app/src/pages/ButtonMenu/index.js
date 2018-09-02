import React from 'react';
import ButtonMenu from 'react-slds/components/ButtonMenu';
import MenuItem from 'react-slds/components/MenuItem';
import MenuDivider from 'react-slds/components/MenuDivider';

export default function ButtonMenuExample() {
    return (
        <div>
            <ButtonMenu className="slds-m-horizontal_medium" menuSize="x-small">
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
                <MenuItem label="Menu Item Three" />
                <MenuDivider variant="space" />
                <MenuItem label="Menu Item Four" />
            </ButtonMenu>
            <ButtonMenu className="slds-m-horizontal_medium" menuSize="x-small" iconName="utility:settings">
                <MenuItem label="Menu header" variant="header" />
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
                <MenuItem label="Menu Item Three" />
                <MenuItem label="Menu header" variant="header" />
                <MenuItem label="Menu Item One" />
                <MenuItem label="Menu Item Two" />
            </ButtonMenu>
            <ButtonMenu className="slds-m-horizontal_medium" menuSize="x-small" iconName="utility:threedots_vertical">
                <MenuItem
                    label="Right Icon"
                    iconName="utility:table"
                    iconPosition="right" />
                <MenuItem
                    label="Right Icon"
                    iconName="utility:kanban"
                    iconPosition="right" />
                <MenuItem
                    label="Right Icon"
                    iconName="utility:side_list"
                    iconPosition="right" />
            </ButtonMenu>
        </div>
    );
}