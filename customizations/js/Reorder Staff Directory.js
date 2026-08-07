/*This reorders the Staff Directory by name. Staff not added will appear alphabetically after the customized order*/
<script type="text/javascript">
window.addEventListener("load", function () {
    const preferredOrder = [
        "Jane Doe",
        "staff name",
        "staff name",
        "staff name",
		"staff name"
    ];

    const staffMembers = Array.from(
        document.querySelectorAll(".staff-member")
    );

    if (!staffMembers.length) {
        return;
    }

    const directory = staffMembers[0].parentElement;

    preferredOrder.slice().reverse().forEach(function (name) {
        const entry = staffMembers.find(function (staffMember) {
            const nameElement =
                staffMember.querySelector(".staff-name strong");

            return nameElement &&
                nameElement.textContent.trim() === name;
        });

        if (entry) {
            directory.insertBefore(
                entry,
                directory.querySelector(".staff-member")
            );
        }
    });
});
</script>


/*This addes department headings to further customize the Staff order by department. Staff not added will appear at the end under the heading "Other Staff*/
<script type="text/javascript">
window.addEventListener("load", function () {
    const directory = document.querySelector("#main > .col-xs-12");

    if (!directory) {
        return;
    }

    const departments = [
        {
            heading: "Administration",
            staff: [
                "Jane Doe",
                "staff name",				               
            ]
        },
		        {
            heading: "Adult Services",
            staff: [
                "Jane Doe",
                "staff name",				               
            ]
        },
        {
            heading: "Patron Services",
            staff: [
                "Jane Doe",
                "staff name",			
            ]
        },
        {
            heading: "Technical Services",
            staff: [
                "Jane Doe",
                "staff name",			
            ]
        },
        {
            heading: "Youth Services",
            staff: [
                "Jane Doe",
                "staff name",			
            ]
        }
    ];

    const staffMembers = Array.from(
        directory.querySelectorAll(".staff-member")
    );

    if (!staffMembers.length) {
        return;
    }

    /*
     * Associate each displayed name with its complete
     * staff-member element.
     */
    const staffByName = new Map();

    staffMembers.forEach(function (staffMember) {
        const nameElement =
            staffMember.querySelector(".staff-name strong");

        if (nameElement) {
            staffByName.set(
                nameElement.textContent.trim(),
                staffMember
            );
        }

        staffMember.remove();
    });

    /*
     * Create each department heading and place its staff
     * immediately after it.
     */
    departments.forEach(function (department) {
        const heading = document.createElement("h2");

        heading.className = "staff-department-heading";
        heading.textContent = department.heading;
        directory.appendChild(heading);

        department.staff.forEach(function (name) {
            const staffMember = staffByName.get(name);

            if (staffMember) {
                directory.appendChild(staffMember);
                staffByName.delete(name);
            }
        });
    });

    /*
     * If a new staff member is added in Aspen but not added
     * to this script, display them at the bottom rather than
     * accidentally hiding them.
     */
    if (staffByName.size > 0) {
        const heading = document.createElement("h2");

        heading.className = "staff-department-heading";
        heading.textContent = "Other Staff";
        directory.appendChild(heading);

        staffByName.forEach(function (staffMember) {
            directory.appendChild(staffMember);
        });
    }
});
</script>
