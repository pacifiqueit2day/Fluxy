import React from "react"

const CardData = ({
    title,
    total,
    children
}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 rounded-lg hover:bg-blue-100 border border-border bg-card py-2 sm:py-6 px-2.5 sm:px-7.5 shadow-default ">
            <div className="flex h-10 sm:h-11.5 w-10 sm:w-11.5 items-center justify-center rounded-full bg-muted text-primary">
                {children}
            </div>

            <div className="text-end">
                <div>
                    <h4 className="text-title-md font-bold text-foreground">
                        {total}
                    </h4>
                    <span className="text-xs sm:text-sm font-medium">{title}</span>
                </div>
            </div>
        </div>
    )
}

export default CardData
