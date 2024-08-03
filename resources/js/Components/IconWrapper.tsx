import React from "react";
import { IconBaseProps } from "react-icons";

interface IconWrapperProps extends IconBaseProps {
    icon: React.ElementType;
    className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
    icon: Icon,
    className,
    ...props
}) => {
    return <Icon className={className} {...props} />;
};

export default IconWrapper;
