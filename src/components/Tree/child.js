import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import TreeChildren from './treeChildren';
import ExpandCollapseButton from './expandCollapseButton';
import ItemContainerLi from './styled/itemContainerLi';
import NodeContainer from './styled/nodeContainer';
import Label from './styled/label';
import IconContainer from './styled/iconContainer';
import InputCheckbox from './styled/inputCheckbox';
import ChildrenContainer from './styled/childrenContainer';

export default function Child(props) {
    const {
        label,
        isExpanded,
        isLoading,
        children,
        isChecked,
        icon,
        childPath,
        onExpandCollapse,
        onSelect,
    } = props;
    const hasChildren = Array.isArray(children);
    const hasCheckbox = typeof isChecked === 'boolean' || isChecked === 'indeterminate';
    const hasIcon = !!icon;
    return (
        <ItemContainerLi hasChildren={hasChildren} icon={icon}>
            <NodeContainer>
                <ExpandCollapseButton
                    hasChildren={hasChildren}
                    isExpanded={isExpanded === true}
                    isLoading={isLoading === true}
                    onClick={() => onExpandCollapse({ childPath })}
                />
                <RenderIf isTrue={hasCheckbox}>
                    <InputCheckbox
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onSelect({ childPath })}
                    />
                </RenderIf>
                <RenderIf isTrue={hasIcon}>
                    <IconContainer>{icon}</IconContainer>
                </RenderIf>
                <Label icon={icon}>{label}</Label>
            </NodeContainer>
            <RenderIf isTrue={hasChildren && isExpanded}>
                <ChildrenContainer icon={icon} isChecked={isChecked}>
                    <TreeChildren
                        data={children}
                        onSelect={onSelect}
                        onExpandCollapse={onExpandCollapse}
                        childPath={childPath}
                    />
                </ChildrenContainer>
            </RenderIf>
        </ItemContainerLi>
    );
}

Child.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    isChecked: PropTypes.oneOf([true, false, 'indeterminate']),
    isExpanded: PropTypes.bool,
    isLoading: PropTypes.bool,
    icon: PropTypes.node,
    children: PropTypes.array,
    onExpandCollapse: PropTypes.func,
    onSelect: PropTypes.func,
    childPath: PropTypes.array,
};

Child.defaultProps = {
    label: undefined,
    isChecked: undefined,
    isExpanded: undefined,
    isLoading: undefined,
    children: undefined,
    icon: null,
    onExpandCollapse: () => {},
    onSelect: () => {},
    childPath: [],
};
